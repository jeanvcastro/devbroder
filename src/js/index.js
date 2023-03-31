import "../sass/index.scss";

window.onload = () => {
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
