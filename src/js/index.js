import "../sass/index.scss";

window.onload = () => {
  //set theme based in user preference
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }

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
};
