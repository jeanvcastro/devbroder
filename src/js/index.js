import "../sass/index.scss";

const getInitialTheme = () => {
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) {
    return saved === "true";
  }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const themeToggle = document.getElementById("theme-toggle");
let darkMode = getInitialTheme();

const applyTheme = dark => {
  document.body.classList.toggle("dark-mode", dark);

  document.querySelectorAll(".dark").forEach(element => {
    element.style.display = dark ? "block" : "none";
  });

  document.querySelectorAll(".light").forEach(element => {
    element.style.display = dark ? "none" : "block";
  });
};

themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  applyTheme(darkMode);
  localStorage.setItem("darkMode", darkMode);
});

applyTheme(darkMode);

document.getElementById("copyright").textContent = `© ${new Date().getFullYear()} DevBroder - Todos os direitos reservados`;
