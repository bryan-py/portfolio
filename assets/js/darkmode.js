(function () {
  const STORAGE_KEY = "bryan-theme";
  const body        = document.body;
  const toggle      = document.getElementById("theme-toggle");

  function applyTheme(dark) {
    if (dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }

  function getSavedTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  applyTheme(getSavedTheme());

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    });
  }

  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      applyTheme(e.newValue === "dark");
    }
  });
})();
