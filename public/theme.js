// theme.js
(function() {
  function getPreferredTheme() {
    if (localStorage.theme) {
      return localStorage.theme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }

  const theme = getPreferredTheme();
  document.documentElement.classList.add(theme);
})();
