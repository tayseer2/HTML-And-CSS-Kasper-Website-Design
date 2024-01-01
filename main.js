document.addEventListener("DOMContentLoaded", function () {
  let toggleButton = document.querySelector(".toggle-menu");
  let menuList = toggleButton.nextElementSibling;

  if (toggleButton && menuList) {
    toggleButton.addEventListener("click", function () {
      menuList.classList.toggle("show-menu");
    });
  }
});
