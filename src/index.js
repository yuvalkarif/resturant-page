//Imports
import './style.css';
import './init.js';
import homePageElement from './home.js';
import menuPageElement from './menu.js';
import aboutPageElement from './about';

//Element Containers
const cont = document.getElementById("content");
const data = document.createElement("div");
data.setAttribute(`id`,`data`);
//Event Listeners for the Navigation system
const homeBtn =document.getElementById("home");
const menuBtn =document.getElementById("menu");
const aboutBtn =document.getElementById("about");


//Initial Tree
cont.appendChild(data);
data.appendChild(homePageElement.elem);

//The listeners themselves
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





