/*JUST MENU BAR */
const menuButton = document.querySelector(".menu-button");
const menuPage = document.querySelector(".menu_page");

let showMenu = false;

//initiAL SETUP

//ADD CLASS
menuButton.addEventListener("click", toggolmenu);

function toggolmenu() {
  if (!showMenu) {
    menuButton.classList.add("close");
    menuPage.classList.add("show");

    showMenu = true;
  } else {
    menuButton.classList.remove("close");
    menuPage.classList.remove("show");
    showMenu = false;
  }
}
