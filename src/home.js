import Pic from './pic1.jpg';
 function contentMaker(){
    const para = document.createElement(`p`);
    para.innerText=`The YHK Brand offers unique dishesh each day, made by hand from fresh ingredients`;
    return para;
  }
 function picComp() {
    const Pic1 = new Image();
  Pic1.src = Pic;
  Pic1.setAttribute(`class`,`pic`);
    return Pic1;
}
const elem=document.createElement(`div`);
elem.setAttribute(`id`,`homePage`);
elem.appendChild(picComp());
elem.appendChild(contentMaker());

console.log(elem);
export default {elem};



