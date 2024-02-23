import "../sass/index.scss";

const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeToggle = document.getElementById("theme-toggle");
let darkMode = userPrefersDark;

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

if (localStorage.getItem("darkMode") !== null) {
  darkMode = localStorage.getItem("darkMode") === "true";
} else {
  localStorage.setItem("darkMode", darkMode);
}

applyTheme(darkMode);
