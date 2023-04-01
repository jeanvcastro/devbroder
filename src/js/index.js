import feather from "feather-icons";
import "../sass/index.scss";

feather.replace();

//set theme based in user preference
const html = document.documentElement;
const toggleTheme = document.querySelector("#toggle-theme");

const lightMessage = "Mudar para tema claro";
const darkMessage = "Mudar para tema escuro";

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  html.setAttribute("data-theme", "dark");
  toggleTheme.title = lightMessage;
} else {
  html.setAttribute("data-theme", "light");
  toggleTheme.title = darkMessage;
}

toggleTheme.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  toggleTheme.title = newTheme === "dark" ? lightMessage : darkMessage;
  html.setAttribute("data-theme", newTheme);
});

const collapse = document.querySelector("#collapse");
const toggleCollapseBtn = document.querySelector("#toggle-collapse");

toggleCollapseBtn.addEventListener("click", () => {
  collapse.classList.toggle("show");
});

[...document.querySelectorAll("#collapse a")].forEach(a => {
  a.addEventListener("click", () => {
    collapse.classList.remove("show");
  });
});
