function contentMaker(){
    const para = document.createElement(`p`);
    para.innerText=`THIS IS THE About`;
    return para;
  }
const elem=document.createElement(`div`);
elem.setAttribute(`id`,`aboutPage`);
elem.appendChild(contentMaker());
export default {elem};
