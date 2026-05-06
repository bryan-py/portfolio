/* ================================================================
   DARK MODE — darkmode.js
   Adicione no <body> do home.html, antes do </body>:
   <script src="darkmode.js"></script>
   
   O botão de toggle deve estar no <body>, antes do <header>:
   <button id="theme-toggle" aria-label="Alternar tema">
       <i class="icon-sun bi bi-sun-fill"></i>
       <i class="icon-moon bi bi-moon-stars-fill"></i>
   </button>
   ================================================================ */

(function () {
  const STORAGE_KEY = "bryan-theme";
  const body        = document.body;
  const toggle      = document.getElementById("theme-toggle");

  // ── Aplica o tema salvo ou preferência do sistema ──
  function applyTheme(dark) {
    if (dark) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }

  // ── Lê preferência salva; cai na preferência do sistema ──
  function getSavedTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // ── Inicializa ──
  applyTheme(getSavedTheme());

  // ── Clique no toggle ──
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("dark-mode");
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    });
  }

  // ── Sincroniza entre abas ──
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      applyTheme(e.newValue === "dark");
    }
  });
})();
