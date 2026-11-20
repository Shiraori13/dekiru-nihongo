/* Classic scripts and templates deliberately support file:// (no fetch/modules).
   Data promises and feature promises are separate; every dependency loads once. */
(() => {
  "use strict";
  const scripts = new Map(),
    styles = new Map(),
    features = new Map();
  const definitions = {
    reading: {
      css: ["assets/study-modes.css"],
      scripts: ["data/readings.js", "assets/reading.js"],
    },
    speaking: {
      css: ["assets/study-modes.css", "assets/speaking.css"],
      scripts: ["data/speaking.js", "assets/speaking.js"],
    },
    kanji: {
      css: [
        "assets/study-modes.css",
        { href: "assets/pickers.css", after: "assets/shell.css" },
      ],
      scripts: ["data/kanji.js", "assets/kanji.js"],
    },
    "grammar-data": { scripts: ["data/grammar.js"] },
    grammar: {
      dependencies: ["grammar-data"],
      css: [
        "assets/grammar.css",
        { href: "assets/pickers.css", after: "assets/shell.css" },
      ],
      scripts: [
        "data/grammar-practice.js",
        "assets/grammar-support.js",
        "assets/grammar-core.js",
        "assets/grammar.js",
      ],
    },
    exam: {
      dependencies: ["grammar-data"],
      css: ["assets/exams.css"],
      scripts: ["data/exams.js", "assets/exam-core.js", "assets/exams.js"],
    },
  };
  function script(path) {
    if (scripts.has(path)) return scripts.get(path);
    const promise = new Promise((resolve, reject) => {
      const node = document.createElement("script");
      node.src = path;
      node.async = false;
      node.onload = resolve;
      node.onerror = () => {
        node.remove();
        scripts.delete(path);
        const hint =
          location.protocol === "file:"
            ? "Kiểm tra thư mục đã sao chép đủ tệp rồi thử lại."
            : "Kiểm tra kết nối hoặc máy chủ cục bộ (Live Server) đã bật chưa, rồi bấm Thử lại hoặc tải lại trang.";
        reject(Error(`Không tải được ${path}. ${hint}`));
      };
      document.body.append(node);
    });
    scripts.set(path, promise);
    return promise;
  }
  function stylesheet(spec) {
    const path = typeof spec === "string" ? spec : spec.href;
    const after = typeof spec === "string" ? null : spec.after;
    if (styles.has(path)) return styles.get(path);
    if (document.querySelector(`link[href="${path}"]`))
      return Promise.resolve();
    const promise = new Promise((resolve, reject) => {
      const node = document.createElement("link");
      node.rel = "stylesheet";
      node.href = path;
      node.onload = resolve;
      node.onerror = () => {
        node.remove();
        styles.delete(path);
        reject(Error("Không tải được giao diện. Vui lòng thử lại."));
      };
      const anchor = after
        ? document.querySelector(`link[href="${after}"]`)
        : document.querySelector('link[href="assets/mobile.css"]');
      if (anchor) {
        if (after) anchor.after(node);
        else anchor.before(node);
      } else {
        document.head.append(node);
      }
    });
    styles.set(path, promise);
    return promise;
  }
  function ensure(mode) {
    if (!definitions[mode]) return Promise.resolve();
    if (features.has(mode)) return features.get(mode);
    const task = (async () => {
      const definition = definitions[mode];
      for (const dependency of definition.dependencies || [])
        await ensure(dependency);
      const cssList = Array.isArray(definition.css)
        ? definition.css
        : definition.css
          ? [definition.css]
          : [];
      for (const css of cssList) await stylesheet(css);
      const template = document.getElementById(`${mode}Template`);
      // Load feature data before stamping its template so failed fetches do not expose an empty skeleton.
      const preScripts = template
        ? definition.scripts.slice(0, -1)
        : definition.scripts;
      for (const path of preScripts) await script(path);
      if (template) {
        document
          .getElementById(`${mode}Mode`)
          .append(template.content.cloneNode(true));
        template.remove();
      }
      if (template && definition.scripts.length) {
        await script(definition.scripts[definition.scripts.length - 1]);
      }
      if (mode === "exam")
        await new Promise((resolve, reject) => {
          const root = document.getElementById("examMode");
          const check = () => {
            if (root.dataset.ready === "true") {
              observer.disconnect();
              resolve();
            } else if (root.dataset.ready === "error") {
              observer.disconnect();
              reject(Error("Không mở được bộ nhớ đề. Hãy tải lại trang."));
            }
          };
          const observer = new MutationObserver(check);
          observer.observe(root, {
            attributes: true,
            attributeFilter: ["data-ready"],
          });
          check();
        });
      document.dispatchEvent(
        new CustomEvent("dekiru:feature-ready", { detail: mode }),
      );
    })().catch((error) => {
      features.delete(mode);
      throw error;
    });
    features.set(mode, task);
    return task;
  }
  window.FeatureLoader = { ensure };
})();
