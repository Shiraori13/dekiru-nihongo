/* Runs before styles so a saved appearance is applied before the first paint. */
(function () {
  "use strict";

  const key = "dekiru_appearance_v1";
  const defaults = Object.freeze({
    version: 1,
    theme: "light",
    background: "mint",
    glassAlpha: 0.66,
    glassBlur: 20,
    uiSize: 17,
  });
  const clamp = (value, min, max, fallback) =>
    typeof value === "number" && Number.isFinite(value)
      ? Math.min(max, Math.max(min, value))
      : fallback;
  const sanitize = (value) => {
    const source =
      value && typeof value === "object" && value.version === 1 ? value : {};
    return {
      version: 1,
      theme: source.theme === "dark" ? "dark" : "light",
      background: ["mint", "sakura", "ocean", "custom"].includes(
        source.background,
      )
        ? source.background
        : defaults.background,
      glassAlpha: clamp(source.glassAlpha, 0.55, 0.96, defaults.glassAlpha),
      glassBlur: clamp(source.glassBlur, 0, 28, defaults.glassBlur),
      uiSize: [16, 17, 18, 20].includes(source.uiSize)
        ? source.uiSize
        : defaults.uiSize,
    };
  };

  let stored = null;
  let legacyTheme = null;
  let storageAvailable = true;
  try {
    const raw = localStorage.getItem(key);
    try {
      stored = raw ? JSON.parse(raw) : null;
    } catch (_) {
      // An invalid appearance record never prevents the study app from loading.
    }
    legacyTheme = localStorage.getItem("dekiru_theme");
  } catch (_) {
    storageAvailable = false;
  }
  let state = sanitize(stored);
  if (legacyTheme === "light" || legacyTheme === "dark") {
    state.theme = legacyTheme;
  }

  const applyBody = () => {
    if (!document.body) return;
    document.body.dataset.theme = state.theme;
    document.body.dataset.background = state.background;
  };
  const apply = (value) => {
    state = sanitize(value);
    const root = document.documentElement;
    root.dataset.theme = state.theme;
    root.dataset.background = state.background;
    root.style.colorScheme = state.theme;
    root.style.setProperty("--glass-alpha", String(state.glassAlpha));
    root.style.setProperty("--glass-blur", state.glassBlur + "px");
    root.style.setProperty("--ui-size", state.uiSize + "px");
    applyBody();
    return { ...state };
  };

  window.AppearanceBootstrap = {
    key,
    defaults,
    sanitize,
    apply,
    applyBody,
    storageAvailable,
    get state() {
      return { ...state };
    },
  };
  apply(state);
})();
