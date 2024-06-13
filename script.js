const burger = document.querySelector(".burger")
const menuItem = document.querySelectorAll(".menuItem")
const menu = document.querySelector(".menu")


burger.onclick = function () {
    menu.classList.toggle("openMenu");
    burger.classList.toggle("open")
  };
  
  menuItem.forEach((item) => {
    item.onclick = function () {
      menu.classList.remove("openMenu");
      burger.classList.toggle("open")
  
    };
  });