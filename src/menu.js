function contentMaker(){
    const para = document.createElement(`p`);
    para.innerText=`THIS IS THE MENU`;
    return para;
  }
const elem=document.createElement(`div`);
elem.setAttribute(`id`,`menuPage`);
elem.appendChild(contentMaker());
export default {elem};
