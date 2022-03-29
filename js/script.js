var toggleButton = document.querySelector("menu-toggle");
var menu = document.querySelector("#main-menu ul");

toggleButton.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
});
