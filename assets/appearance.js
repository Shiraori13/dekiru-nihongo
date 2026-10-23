/* Appearance owns only its preferences and its separate background database. */
(function () {
  "use strict";

  const bootstrap = window.AppearanceBootstrap;
  if (!bootstrap) return;
  const defaults = bootstrap.defaults;
  const key = bootstrap.key;
  const databaseName = "dekiru_appearance_v1";
  const storeName = "background";
  let state = bootstrap.state;
  let configPersistent = bootstrap.storageAvailable;
  let imageStorage = "checking";
  let customBlob = null;
  let customURL = "";
  let imageGeneration = 0;
  let imageQueue = Promise.resolve();
  let opener = null;
  let uploadBusy = false;
  let databasePromise = null;

  const dialog = document.createElement("dialog");
  dialog.id = "appearanceDialog";
  dialog.className = "appearance-dialog";
  dialog.setAttribute("aria-labelledby", "appearanceTitle");
  dialog.setAttribute("aria-describedby", "appearanceDescription");
  dialog.innerHTML = `
    <div class="appearance-header">
      <div><span class="appearance-eyebrow">Không gian học của bạn</span>
        <h2 id="appearanceTitle">Giao diện</h2></div>
      <button type="button" class="appearance-close" data-appearance-close aria-label="Đóng bảng Giao diện" title="Đóng (Escape)">
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
      </button>
    </div>
    <div class="appearance-content">
      <p class="appearance-description" id="appearanceDescription">Chọn một không gian dễ chịu để tập trung học tiếng Nhật.</p>
      <fieldset class="appearance-section">
        <legend>Chế độ hiển thị</legend>
        <div class="appearance-themes">
          <button type="button" id="appearanceThemeLight" data-appearance-theme="light" aria-pressed="true">
            <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
            Sáng<span class="appearance-selection" aria-hidden="true">✓</span>
          </button>
          <button type="button" id="appearanceThemeDark" data-appearance-theme="dark" aria-pressed="false">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 14a8.6 8.6 0 0 1-10.5-10.5A8.6 8.6 0 1 0 20.5 14Z"/></svg>
            Tối<span class="appearance-selection" aria-hidden="true">✓</span>
          </button>
        </div>
      </fieldset>
      <fieldset class="appearance-section">
        <legend>Hình nền</legend>
        <div class="appearance-backgrounds">
          <button type="button" data-background-choice="mint" aria-pressed="true"><span class="appearance-thumbnail appearance-mint"><span class="appearance-check" aria-hidden="true">✓</span></span><span>Mint</span></button>
          <button type="button" data-background-choice="sakura" aria-pressed="false"><span class="appearance-thumbnail appearance-sakura"><span class="appearance-check" aria-hidden="true">✓</span></span><span>Sakura</span></button>
          <button type="button" data-background-choice="ocean" aria-pressed="false"><span class="appearance-thumbnail appearance-ocean"><span class="appearance-check" aria-hidden="true">✓</span></span><span>Đại dương</span></button>
          <button type="button" data-background-choice="custom" aria-pressed="false" hidden><span class="appearance-thumbnail appearance-custom"><span class="appearance-check" aria-hidden="true">✓</span></span><span>Ảnh của bạn</span></button>
        </div>
        <div class="appearance-upload-actions">
          <label class="appearance-upload" for="appearanceUpload">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 16V4m-4 4 4-4 4 4M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/></svg>
            <span id="appearanceUploadLabel">Tải ảnh lên</span>
            <input type="file" id="appearanceUpload" accept="image/png,image/jpeg,image/webp,image/gif" aria-describedby="appearanceImageHelp appearanceUploadStatus">
          </label>
          <button type="button" id="appearanceRemoveImage" class="appearance-plain" hidden>Xóa ảnh</button>
        </div>
        <p class="appearance-help" id="appearanceImageHelp">PNG, JPG, WebP hoặc GIF · tối đa 20 MB. Ảnh lớn được thu gọn; GIF dùng khung hình đầu.</p>
        <p id="appearanceUploadStatus" class="appearance-feedback" role="status" aria-live="polite" data-status="idle"></p>
      </fieldset>
      <fieldset class="appearance-section">
        <legend>Chất liệu kính</legend>
        <label class="appearance-slider-label" for="appearanceOpacity">Độ đậm của kính<output id="appearanceOpacityValue" for="appearanceOpacity">66%</output></label>
        <input type="range" id="appearanceOpacity" min="55" max="96" step="1" value="66" aria-describedby="appearanceOpacityHelp">
        <p class="appearance-help" id="appearanceOpacityHelp">Giảm để trong hơn, tăng để nền chữ đậm hơn.</p>
        <label class="appearance-slider-label" for="appearanceBlur">Độ mờ nền<output id="appearanceBlurValue" for="appearanceBlur">20 px</output></label>
        <input type="range" id="appearanceBlur" min="0" max="28" step="1" value="20">
      </fieldset>
      <fieldset class="appearance-section">
        <legend>Cỡ chữ giao diện</legend>
        <label class="appearance-select-label" for="appearanceFontSize">Kích thước chữ<select id="appearanceFontSize" aria-describedby="appearanceFontHelp"><option value="16">16 px · Gọn</option><option value="17">17 px · Mặc định</option><option value="18">18 px · Lớn</option><option value="20">20 px · Rất lớn</option></select></label>
        <p class="appearance-help" id="appearanceFontHelp">Luyện đọc vẫn dùng cỡ chữ riêng bạn đã chọn.</p>
      </fieldset>
      <p id="appearanceStorageStatus" class="appearance-storage" role="status" aria-live="polite" data-storage="checking">Đang kiểm tra bộ nhớ giao diện…</p>
      <button type="button" id="appearanceReset" class="appearance-reset">Khôi phục giao diện mặc định</button>
      <p class="appearance-help appearance-reset-help">Chỉ đặt lại giao diện. Bài đang làm và tiến độ học được giữ nguyên.</p>
    </div>`;
  document.body.append(dialog);
  const byId = (id) => document.getElementById(id);
  const upload = byId("appearanceUpload");
  const storageStatus = byId("appearanceStorageStatus");
  const uploadStatus = byId("appearanceUploadStatus");
  const imageChoice = dialog.querySelector('[data-background-choice="custom"]');

  function showImageStatus(message, type = "success") {
    uploadStatus.textContent = message;
    uploadStatus.dataset.status = type;
  }

  function updateStorageStatus() {
    if (!configPersistent) {
      storageStatus.dataset.storage = "session";
      storageStatus.textContent =
        "Bộ nhớ tùy chọn đang bị chặn hoặc đã đầy. Giao diện chỉ giữ trong phiên này; khi mở lại sẽ dùng lựa chọn đã lưu hoặc nền mặc định. Bạn vẫn học bình thường.";
    } else if (imageStorage === "checking") {
      storageStatus.dataset.storage = "checking";
      storageStatus.textContent =
        "Tùy chọn đã được lưu. Đang kiểm tra bộ nhớ ảnh…";
    } else if (imageStorage === "session") {
      storageStatus.dataset.storage = "partial";
      storageStatus.textContent = customBlob
        ? state.background === "custom"
          ? "Tùy chọn đã được lưu. Bộ nhớ ảnh đang bị chặn hoặc đã đầy: ảnh này chỉ giữ trong phiên hiện tại; khi mở lại sẽ dùng nền Mint."
          : "Tùy chọn đã được lưu. Ảnh cá nhân chỉ giữ trong phiên hiện tại vì bộ nhớ ảnh bị chặn hoặc đã đầy. Nền có sẵn đang chọn vẫn được lưu."
        : "Tùy chọn đã được lưu. Bộ nhớ ảnh đang bị chặn hoặc đã đầy; ảnh tải lên chỉ giữ trong phiên hiện tại. Nền có sẵn luôn dùng được.";
    } else {
      storageStatus.dataset.storage = "persistent";
      storageStatus.textContent =
        "Giao diện được lưu trên trình duyệt này. Ảnh cá nhân chỉ nằm trên thiết bị của bạn.";
    }
  }

  function persistConfig() {
    try {
      // A RAM-only replacement must not restore an older saved image on reload.
      const savedState =
        state.background === "custom" && imageStorage === "session"
          ? { ...state, background: "mint" }
          : state;
      localStorage.setItem(key, JSON.stringify(savedState));
      localStorage.setItem("dekiru_theme", state.theme);
      configPersistent = true;
    } catch (_) {
      configPersistent = false;
    }
    updateStorageStatus();
    return configPersistent;
  }

  function syncControls() {
    const isDark = state.theme === "dark";
    document.querySelectorAll("[data-appearance-theme]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.appearanceTheme === state.theme),
      );
    });
    document
      .querySelectorAll("#themeToggle, [data-theme-toggle]")
      .forEach((button) => {
        const label = isDark ? "Chuyển sang sáng" : "Chuyển sang tối";
        button.setAttribute("aria-label", label);
        button.setAttribute("aria-pressed", String(isDark));
        button.title = label + " (Phím D)";
        const text = button.querySelector(".theme-label");
        if (text) text.textContent = isDark ? "Chế độ sáng" : "Chế độ tối";
        button.querySelectorAll("[data-theme-icon]").forEach((icon) => {
          const visible = icon.dataset.themeIcon === (isDark ? "sun" : "moon");
          icon.toggleAttribute("hidden", !visible);
          icon.style.display = visible ? "" : "none";
        });
      });
    dialog.querySelectorAll("[data-background-choice]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.backgroundChoice === state.background),
      );
    });
    imageChoice.hidden = !customBlob;
    byId("appearanceRemoveImage").hidden = !customBlob;
    byId("appearanceUploadLabel").textContent = customBlob
      ? "Thay ảnh nền"
      : "Tải ảnh lên";
    byId("appearanceOpacity").value = String(
      Math.round(state.glassAlpha * 100),
    );
    byId("appearanceOpacityValue").textContent =
      Math.round(state.glassAlpha * 100) + "%";
    byId("appearanceBlur").value = String(state.glassBlur);
    byId("appearanceBlurValue").textContent = state.glassBlur + " px";
    byId("appearanceFontSize").value = String(state.uiSize);
  }

  function apply(patch, persist = true) {
    state = bootstrap.apply({ ...state, ...patch });
    syncControls();
    if (persist) persistConfig();
    window.dispatchEvent(
      new CustomEvent("appearancechange", { detail: { ...state } }),
    );
  }

  function setCustomBlob(blob) {
    const previous = customURL;
    customURL = blob ? URL.createObjectURL(blob) : "";
    customBlob = blob;
    if (customURL) {
      const cssURL = 'url("' + customURL + '")';
      document.documentElement.style.setProperty("--appearance-image", cssURL);
      imageChoice.querySelector(".appearance-thumbnail").style.backgroundImage =
        cssURL;
    } else {
      document.documentElement.style.removeProperty("--appearance-image");
      imageChoice.querySelector(".appearance-thumbnail").style.backgroundImage =
        "";
    }
    if (previous) URL.revokeObjectURL(previous);
    syncControls();
  }

  function openDatabase() {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve) => {
      let settled = false;
      let request;
      const finish = (database) => {
        if (settled) {
          database?.close();
          return;
        }
        settled = true;
        clearTimeout(timer);
        imageStorage = database ? "persistent" : "session";
        updateStorageStatus();
        resolve(database);
      };
      const timer = setTimeout(() => finish(null), 2500);
      try {
        request = indexedDB.open(databaseName, 1);
        request.onupgradeneeded = () => {
          const database = request.result;
          if (!database.objectStoreNames.contains(storeName)) {
            database.createObjectStore(storeName);
          }
        };
        request.onsuccess = () => {
          const database = request.result;
          database.onversionchange = () => {
            database.close();
            databasePromise = null;
            imageStorage = "session";
            updateStorageStatus();
          };
          finish(database);
        };
        request.onerror = () => finish(null);
        request.onblocked = () => finish(null);
      } catch (_) {
        finish(null);
      }
    });
    return databasePromise;
  }

  function transact(database, mode, operation) {
    return new Promise((resolve, reject) => {
      let transaction;
      let request;
      try {
        transaction = database.transaction(storeName, mode);
        request = operation(transaction.objectStore(storeName));
        transaction.oncomplete = () => resolve(request?.result);
        transaction.onerror = () => reject(transaction.error);
        transaction.onabort = () => reject(transaction.error);
      } catch (error) {
        reject(error);
      }
    });
  }

  // Serialize mutations so a late upload can never re-create an image after reset.
  // Deletions always run: a subsequent preset choice must not cancel a reset.
  function storeImage(blob, generation) {
    imageQueue = imageQueue
      .catch(() => {})
      .then(async () => {
        if (blob && generation !== imageGeneration) return false;
        const database = await openDatabase();
        if (blob && generation !== imageGeneration) return false;
        if (!database || (blob && !configPersistent)) {
          if (generation === imageGeneration) {
            imageStorage = "session";
            updateStorageStatus();
          }
          return false;
        }
        try {
          await transact(database, "readwrite", (store) =>
            blob ? store.put(blob, "custom") : store.delete("custom"),
          );
          if (generation !== imageGeneration) return false;
          imageStorage = "persistent";
          updateStorageStatus();
          return true;
        } catch (_) {
          if (generation === imageGeneration) {
            imageStorage = "session";
            updateStorageStatus();
          }
          return false;
        }
      });
    return imageQueue;
  }

  async function prepareImage(file) {
    if (!file || !file.size)
      throw new Error("Hãy chọn một file ảnh có nội dung.");
    if (
      !["image/png", "image/jpeg", "image/webp", "image/gif"].includes(
        file.type,
      )
    ) {
      throw new Error("Hãy chọn ảnh PNG, JPG, WebP hoặc GIF.");
    }
    if (file.size > 20 * 1024 * 1024) {
      throw new Error("Ảnh vượt quá 20 MB. Hãy chọn ảnh nhỏ hơn.");
    }
    const sourceURL = URL.createObjectURL(file);
    const source = new Image();
    try {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error("Không đọc được ảnh. Hãy thử một ảnh khác.")),
          15000,
        );
        source.onload = () => {
          clearTimeout(timeout);
          resolve();
        };
        source.onerror = () => {
          clearTimeout(timeout);
          reject(
            new Error("File ảnh bị lỗi hoặc định dạng không được hỗ trợ."),
          );
        };
        source.src = sourceURL;
      });
      const width = source.naturalWidth;
      const height = source.naturalHeight;
      if (!width || !height || width * height > 48 * 1000 * 1000) {
        throw new Error(
          "Ảnh quá lớn (tối đa 48 triệu điểm ảnh). Hãy thu nhỏ ảnh trước.",
        );
      }
      const scale = Math.min(1, 2560 / Math.max(width, height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Trình duyệt chưa xử lý được ảnh này.");
      context.drawImage(source, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/webp", 0.88),
      );
      if (!blob) throw new Error("Không xử lý được ảnh. Hãy thử một ảnh khác.");
      return { blob, resized: scale < 1, animated: file.type === "image/gif" };
    } finally {
      source.onload = null;
      source.onerror = null;
      source.src = "";
      URL.revokeObjectURL(sourceURL);
    }
  }

  function cancelUpload() {
    imageGeneration += 1;
    uploadBusy = false;
    dialog.removeAttribute("aria-busy");
    upload.value = "";
    return imageGeneration;
  }

  async function uploadImage(file) {
    const generation = cancelUpload();
    uploadBusy = true;
    dialog.setAttribute("aria-busy", "true");
    showImageStatus("Đang xử lý ảnh…", "loading");
    try {
      const prepared = await prepareImage(file);
      if (generation !== imageGeneration) return;
      setCustomBlob(prepared.blob);
      apply({ background: "custom" });
      showImageStatus(
        "Ảnh đã được áp dụng. Đang lưu trên thiết bị…",
        "loading",
      );
      const saved = await storeImage(prepared.blob, generation);
      if (generation !== imageGeneration) return;
      persistConfig();
      const note = prepared.resized
        ? " Ảnh đã được thu gọn để tải nhanh hơn."
        : prepared.animated
          ? " Đã dùng khung hình đầu của GIF."
          : "";
      showImageStatus(
        (saved
          ? "Đã lưu và áp dụng ảnh nền."
          : "Đã áp dụng ảnh nền cho phiên hiện tại.") + note,
      );
    } catch (error) {
      if (generation === imageGeneration) {
        showImageStatus(error.message || "Không đọc được ảnh này.", "error");
      }
    } finally {
      if (generation === imageGeneration) {
        uploadBusy = false;
        dialog.removeAttribute("aria-busy");
        upload.value = "";
      }
    }
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    apply({ theme });
  }

  function open(trigger) {
    if (dialog.open) return;
    opener = trigger instanceof HTMLElement ? trigger : document.activeElement;
    document.querySelectorAll("[data-appearance-open]").forEach((button) => {
      button.setAttribute("aria-expanded", "true");
    });
    syncControls();
    dialog.showModal();
    dialog
      .querySelector("[data-appearance-close]")
      .focus({ preventScroll: true });
  }

  function close() {
    if (dialog.open) dialog.close();
  }

  async function removeImage() {
    const generation = cancelUpload();
    setCustomBlob(null);
    apply({
      background: state.background === "custom" ? "mint" : state.background,
    });
    showImageStatus("Đã xóa ảnh cá nhân. Nền có sẵn vẫn dùng được.");
    const removed = await storeImage(null, generation);
    if (generation === imageGeneration && !removed) {
      showImageStatus(
        "Đã xóa ảnh trong phiên này. Trình duyệt chưa cho phép cập nhật ảnh đã lưu.",
      );
    }
  }

  async function reset() {
    const generation = cancelUpload();
    setCustomBlob(null);
    apply(defaults, false);
    try {
      localStorage.removeItem(key);
      localStorage.removeItem("dekiru_theme");
      configPersistent = true;
    } catch (_) {
      configPersistent = false;
    }
    updateStorageStatus();
    showImageStatus(
      "Đã khôi phục giao diện mặc định. Tiến độ học được giữ nguyên.",
    );
    const removed = await storeImage(null, generation);
    if (generation === imageGeneration && !removed) {
      showImageStatus(
        "Đã khôi phục trong phiên này. Trình duyệt chưa cho phép xóa ảnh đã lưu.",
      );
    }
    return { ...state };
  }

  dialog.addEventListener("click", (event) => {
    const theme = event.target.closest("[data-appearance-theme]");
    const background = event.target.closest("[data-background-choice]");
    if (theme) setTheme(theme.dataset.appearanceTheme);
    if (background) {
      cancelUpload();
      apply({ background: background.dataset.backgroundChoice });
      showImageStatus("");
    }
    if (event.target.closest("[data-appearance-close]")) close();
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        close();
      }
    }
  });
  dialog.addEventListener("keydown", (event) => event.stopPropagation());
  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    document.querySelectorAll("[data-appearance-open]").forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
  window.StudyDialogs?.trap(dialog);
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-appearance-open]");
    if (trigger) open(trigger);
    const toggle = event.target.closest("[data-theme-toggle]");
    if (toggle && toggle.id !== "themeToggle") {
      setTheme(state.theme === "dark" ? "light" : "dark");
    }
  });
  document.querySelectorAll("[data-appearance-open]").forEach((button) => {
    button.setAttribute("aria-controls", dialog.id);
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute("aria-expanded", "false");
  });
  byId("appearanceOpacity").addEventListener("input", (event) => {
    apply({ glassAlpha: Number(event.target.value) / 100 });
  });
  byId("appearanceBlur").addEventListener("input", (event) => {
    apply({ glassBlur: Number(event.target.value) });
  });
  byId("appearanceFontSize").addEventListener("change", (event) => {
    apply({ uiSize: Number(event.target.value) });
  });
  upload.addEventListener("change", () => {
    if (upload.files?.[0]) uploadImage(upload.files[0]);
  });
  byId("appearanceRemoveImage").addEventListener("click", removeImage);
  byId("appearanceReset").addEventListener("click", reset);

  syncControls();
  persistConfig();
  const ready = (async () => {
    const generation = imageGeneration;
    const database = await openDatabase();
    if (generation !== imageGeneration) return;
    if (database) {
      try {
        const blob = await transact(database, "readonly", (store) =>
          store.get("custom"),
        );
        if (generation !== imageGeneration) return;
        if (
          blob instanceof Blob &&
          blob.size &&
          blob.type.startsWith("image/")
        ) {
          setCustomBlob(blob);
        }
      } catch (_) {
        imageStorage = "session";
        updateStorageStatus();
      }
    }
    if (generation !== imageGeneration) return;
    if (state.background === "custom" && !customBlob) {
      apply({ background: "mint" });
      showImageStatus(
        "Không đọc được ảnh đã lưu. Đã dùng nền Mint; bạn có thể tải lại ảnh.",
        "error",
      );
    }
    updateStorageStatus();
  })();

  window.Appearance = {
    open,
    close,
    setTheme,
    toggleTheme: () => setTheme(state.theme === "dark" ? "light" : "dark"),
    reset,
    ready,
    getState: () => ({
      ...state,
      hasCustomImage: Boolean(customBlob),
      configPersistent,
      imagePersistent: imageStorage === "persistent",
      uploadBusy,
    }),
  };
})();
