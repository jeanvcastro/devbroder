import "../sass/index.scss";

window.onload = () => {
  const collapse = document.querySelector("#collapse");
  const toggleCollapseBtn = document.querySelector("#toggle-collapse");

  toggleCollapseBtn.addEventListener("click", () => {
    collapse.classList.toggle("show");
  });
};
