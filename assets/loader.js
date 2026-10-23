/* Classic scripts and templates deliberately support file:// (no fetch/modules).
   Data promises and feature promises are separate; every dependency loads once. */
(() => {
  "use strict";
  const scripts = new Map(),
    features = new Map();
  const definitions = {
    reading: { scripts: ["data/readings.js", "assets/reading.js"] },
    kanji: { scripts: ["data/kanji.js", "assets/kanji.js"] },
    "grammar-data": { scripts: ["data/grammar.js"] },
    grammar: {
      dependencies: ["grammar-data"],
      css: "assets/grammar.css",
      scripts: [
        "data/grammar-practice.js",
        "assets/grammar-support.js",
        "assets/grammar-core.js",
        "assets/grammar.js",
      ],
    },
    exam: {
      dependencies: ["grammar-data"],
      css: "assets/exams.css",
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
        reject(
          Error(
            `Không tải được ${path}. Kiểm tra kết nối hoặc thư mục đã sao chép.`,
          ),
        );
      };
      document.body.append(node);
    });
    scripts.set(path, promise);
    return promise;
  }
  function stylesheet(path) {
    if (document.querySelector(`link[href="${path}"]`))
      return Promise.resolve();
    return new Promise((resolve, reject) => {
      const node = document.createElement("link");
      node.rel = "stylesheet";
      node.href = path;
      node.onload = resolve;
      node.onerror = () => {
        node.remove();
        reject(Error("Không tải được giao diện. Vui lòng thử lại."));
      };
      const mobile = document.querySelector('link[href="assets/mobile.css"]');
      if (mobile) mobile.before(node);
      else document.head.append(node);
    });
  }
  function ensure(mode) {
    if (!definitions[mode]) return Promise.resolve();
    if (features.has(mode)) return features.get(mode);
    const task = (async () => {
      const definition = definitions[mode];
      for (const dependency of definition.dependencies || [])
        await ensure(dependency);
      if (definition.css) await stylesheet(definition.css);
      const template = document.getElementById(`${mode}Template`);
      if (template) {
        document
          .getElementById(`${mode}Mode`)
          .append(template.content.cloneNode(true));
        template.remove();
      }
      for (const path of definition.scripts) await script(path);
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
