import loadContactPage from "./modules/contact";
import loadHome from "./modules/home";
import pageLoad from "./modules/initial-load"
import menuLoad from "./modules/menu";
import "./styles.css"

function init(){
    pageLoad();
    loadHome();

    const homeBtn = document.querySelector('.homeBtn')
    const menuBtn = document.querySelector('.menuBtn')
    const contactBtn = document.querySelector('.contactBtn')

    homeBtn.addEventListener('click', loadHome)
    menuBtn.addEventListener('click', menuLoad)
    contactBtn.addEventListener('click', loadContactPage)
}

init();