import './style.css';
import './init.js';
import homePageElement from './home.js';
import menuPageElement from './menu.js';
import aboutPageElement from './about';
const cont = document.getElementById("content");
const data = document.createElement("div");
data.setAttribute(`id`,`data`);

const homeBtn =document.getElementById("home");
const menuBtn =document.getElementById("menu");
const aboutBtn =document.getElementById("about");

cont.appendChild(data);

homeBtn.addEventListener(`click`, ()=>{
    data.innerHTML=``;
    data.appendChild(homePageElement.elem);

});
menuBtn.addEventListener(`click`, ()=>{
    data.innerHTML=``;
    data.appendChild(menuPageElement.elem);

});
aboutBtn.addEventListener(`click`, ()=>{
    data.innerHTML=``;
    data.appendChild(aboutPageElement.elem);

});





