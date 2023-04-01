import feather from "feather-icons";
import "../sass/index.scss";

feather.replace();

//set theme based in user preference
const html = document.documentElement;
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  html.setAttribute("data-theme", "dark");
} else {
  html.setAttribute("data-theme", "light");
}
const toggleTheme = document.querySelector("#toggle-theme");
toggleTheme.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
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
