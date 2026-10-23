/* The single IndexedDB readwrite transaction is the synchronization boundary.
   Notifications improve the UI; they do not grant permission to write.
   localStorage v1 keys are projections for compatibility, never the authority
   after the first migration. This also fences tabs running old app code. */
(() => {
  "use strict";
  const DB = "dekiru_attempts_v2",
    KEY = "current",
    TTL = 12000;
  const ATTEMPT = "dekiru_exam_attempt_v1",
    HISTORY = "dekiru_exam_history_v1";
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  function open() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB, 1);
      request.onupgradeneeded = () => request.result.createObjectStore("state");
      request.onsuccess = () => {
        request.result.onversionchange = () => request.result.close();
        resolve(request.result);
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(Error("Bộ nhớ bài đang bị khóa."));
    });
  }
  class AttemptStore {
    constructor(onChange) {
      this.owner = uid();
      this.current = null;
      this.database = null;
      this.persistent = false;
      this.queue = Promise.resolve();
      this.onChange = onChange;
      try {
        this.channel = new BroadcastChannel("dekiru-attempt-v2");
        this.channel.onmessage = () => this.refresh();
      } catch {
        /* Polling also handles notifications unavailable on file://. */
      }
      this.poll = setInterval(() => this.refresh(), 3000);
      addEventListener("pagehide", () => {
        this.release();
      });
    }
    async init(legacy, history, sanitize = (value) => value) {
      try {
        this.database = await open();
        this.persistent = true;
      } catch {
        /* Session only. */
      }
      const initialize = (row) => {
        if (
          row &&
          typeof row === "object" &&
          Number.isSafeInteger(row.revision) &&
          row.revision > 0
        ) {
          const next = {
            ...row,
            attempt: sanitize(row.attempt),
            history: (Array.isArray(row.history) ? row.history : [])
              .map(sanitize)
              .filter((h) => h?.submittedAt),
          };
          const changed = JSON.stringify(next) !== JSON.stringify(row);
          if (changed) next.revision++;
          return { row: next, changed };
        }
        return {
          row: {
            attempt: legacy,
            history,
            owner: null,
            leaseUntil: 0,
            revision: 1,
          },
          changed: true,
        };
      };
      try {
        await this.run(initialize);
      } catch {
        this.persistent = false;
        this.database?.close();
        this.current = null;
        await this.run(initialize);
      }
      return this.current;
    }
    run(update) {
      const task = async () => {
        let result;
        if (!this.persistent)
          result = update(this.current && clone(this.current));
        else
          result = await new Promise((resolve, reject) => {
            const tx = this.database.transaction("state", "readwrite");
            const store = tx.objectStore("state");
            let outcome;
            store.get(KEY).onsuccess = (event) => {
              try {
                outcome = update(event.target.result || null);
                if (outcome.changed) store.put(outcome.row, KEY);
              } catch (error) {
                tx.abort();
                reject(error);
              }
            };
            tx.oncomplete = () => resolve(outcome);
            tx.onerror = tx.onabort = () =>
              reject(tx.error || Error("Không lưu được bài."));
          });
        this.current = clone(result.row);
        if (result.changed && this.persistent) {
          // A failed projection does not discard an already committed IDB write.
          try {
            localStorage.setItem(
              ATTEMPT,
              JSON.stringify(
                this.current.attempt && {
                  ...this.current.attempt,
                  _revision: this.current.revision,
                },
              ),
            );
            localStorage.setItem(HISTORY, JSON.stringify(this.current.history));
          } catch {
            /* IDB can still persist when localStorage is blocked. */
          }
          this.channel?.postMessage({ revision: this.current.revision });
        }
        this.onChange?.(this.current, result);
        return result;
      };
      const pending = this.queue.then(task);
      this.queue = pending.catch(() => {});
      return pending;
    }
    editable(row = this.current) {
      return (
        !!row &&
        row.owner === this.owner &&
        (!this.persistent || row.leaseUntil > Date.now())
      );
    }
    async refresh() {
      if (!this.current) return;
      try {
        await this.run((row) => {
          // Only the owner renews. Expired owners cannot silently reacquire.
          if (this.editable(row))
            return {
              row: { ...row, leaseUntil: Date.now() + TTL },
              changed: true,
              heartbeat: true,
            };
          return { row, changed: false, heartbeat: true };
        });
      } catch {
        this.onChange?.(this.current, {
          error: "Không đọc/lưu được bài. Hãy thử lại hoặc xuất bản sao.",
        });
      }
    }
    fallback(attempt, history) {
      this.persistent = false;
      this.database?.close();
      const s = clone(attempt);
      s.id = `${s.id}-session-${this.owner}`;
      this.current = {
        attempt: s,
        history: clone(history),
        owner: this.owner,
        leaseUntil: Date.now() + TTL,
        revision: 1,
      };
      this.onChange?.(this.current, {});
    }
    claim(id, takeover = false) {
      return this.run((row) => {
        if (row.attempt?.id !== id)
          return { row, changed: false, conflict: true };
        if (
          !takeover &&
          row.owner &&
          row.owner !== this.owner &&
          row.leaseUntil > Date.now()
        )
          return { row, changed: false, locked: true };
        return {
          row: {
            ...row,
            owner: this.owner,
            leaseUntil: Date.now() + TTL,
            revision: row.revision + 1,
          },
          changed: true,
        };
      });
    }
    start(attempt, expectedId) {
      return this.run((row) => {
        if (
          (row.attempt?.id || null) !== expectedId ||
          (row.attempt && !row.attempt.submittedAt && !this.editable(row))
        )
          return { row, changed: false, conflict: true };
        return {
          row: {
            ...row,
            attempt: clone(attempt),
            owner: this.owner,
            leaseUntil: Date.now() + TTL,
            revision: row.revision + 1,
          },
          changed: true,
        };
      });
    }
    change(id, revision, change) {
      if (!["answer", "flag", "move", "submit"].includes(change.type))
        return Promise.reject(Error("Thao tác không hợp lệ."));
      if (
        change.type !== "submit" &&
        (!Number.isInteger(change.index) ||
          change.index < 0 ||
          change.index > 44)
      )
        return Promise.reject(Error("Vị trí câu không hợp lệ."));
      if (
        change.type === "answer" &&
        change.value !== null &&
        (!Number.isInteger(change.value) ||
          change.value < 0 ||
          change.value > 3)
      )
        return Promise.reject(Error("Lựa chọn không hợp lệ."));
      if (change.type === "flag" && typeof change.value !== "boolean")
        return Promise.reject(Error("Đánh dấu không hợp lệ."));
      return this.run((row) => {
        if (
          row.attempt?.id !== id ||
          row.revision !== revision ||
          !this.editable(row) ||
          row.attempt.submittedAt
        )
          return { row, changed: false, conflict: true };
        const next = clone(row);
        const s = next.attempt,
          expired = s.minutes && Date.now() >= s.startedAt + s.minutes * 60000;
        if (expired || change.type === "submit") {
          s.submittedAt = expired
            ? s.startedAt + s.minutes * 60000
            : Date.now();
          s.reason = expired ? "timeout" : "manual";
          next.history = [
            clone(s),
            ...next.history.filter((h) => h.id !== s.id),
          ].slice(0, 30);
        } else if (change.type === "answer")
          s.answers[change.index] = change.value;
        else if (change.type === "flag") s.flags[change.index] = change.value;
        else if (change.type === "move") s.index = change.index;
        next.revision++;
        next.leaseUntil = Date.now() + TTL;
        return { row: next, changed: true };
      });
    }
    expire(id) {
      return this.run((row) => {
        const s = row.attempt;
        if (
          !s ||
          s.id !== id ||
          s.submittedAt ||
          !s.minutes ||
          Date.now() < s.startedAt + s.minutes * 60000
        )
          return { row, changed: false };
        const next = clone(row);
        next.attempt.submittedAt = s.startedAt + s.minutes * 60000;
        next.attempt.reason = "timeout";
        next.history = [
          clone(next.attempt),
          ...next.history.filter((h) => h.id !== s.id),
        ].slice(0, 30);
        next.revision++;
        return { row: next, changed: true };
      });
    }
    removeExam(examId) {
      return this.run((row) => {
        if (
          row.attempt?.examId === examId &&
          !row.attempt.submittedAt &&
          !this.editable(row)
        )
          return { row, changed: false, conflict: true };
        const next = {
          ...row,
          history: row.history.filter((h) => h.examId !== examId),
          revision: row.revision + 1,
        };
        if (next.attempt?.examId === examId) next.attempt = null;
        return { row: next, changed: true };
      });
    }
    release() {
      if (!this.editable()) return Promise.resolve();
      return this.run((row) =>
        row.owner === this.owner
          ? {
              row: {
                ...row,
                owner: null,
                leaseUntil: 0,
                revision: row.revision + 1,
              },
              changed: true,
            }
          : { row, changed: false },
      ).catch(() => {});
    }
  }
  AttemptStore.hasActive = async () => {
    try {
      const database = await open();
      return await new Promise((resolve) => {
        const tx = database.transaction("state", "readonly"),
          request = tx.objectStore("state").get(KEY);
        tx.oncomplete = () => {
          database.close();
          const active = request.result?.attempt;
          let legacy;
          try {
            legacy = JSON.parse(localStorage.getItem(ATTEMPT));
          } catch {
            /* Blocked/corrupt. */
          }
          resolve(
            !!(
              (active && !active.submittedAt) ||
              (!request.result && legacy && !legacy.submittedAt)
            ),
          );
        };
        tx.onerror = () => {
          database.close();
          resolve(false);
        };
      });
    } catch {
      return false;
    }
  };
  window.AttemptStore = AttemptStore;
})();
