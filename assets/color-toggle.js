(function () {
  const STORAGE_KEY = "color-mode";
  const toggleButtonId = "color-mode-toggle";

  const getSavedMode = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  };

  const saveMode = (mode) => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      // ignore write failures (e.g., private mode)
    }
  };

  const updateLabel = (mode, button) => {
    if (!button) return;
    const label = mode === "dark" ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", label);
    button.textContent = label;
  };

  const applyMode = (mode, button) => {
    document.documentElement.setAttribute("data-theme", mode);
    updateLabel(mode, button);
  };

  const toggleMode = () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    const button = document.getElementById(toggleButtonId);
    applyMode(next, button);
    saveMode(next);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById(toggleButtonId);
    if (!button) return;

    const savedMode = getSavedMode();
    if (savedMode) {
      applyMode(savedMode, button);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      applyMode("light", button);
    } else {
      applyMode("dark", button);
    }

    button.addEventListener("click", toggleMode);
  });
})();
