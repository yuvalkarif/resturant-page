function contentMaker(){
    const cont = document.createElement(`div`);
    const para1 = document.createElement(`p`);
    para1.innerText=`The resturant is located at the beautiful area of "Hertzliya Kipuah",`;
    const para2 = document.createElement(`p`);
    para2.innerText=`Come in each day for a fresh and unique meal between 12:00-14:00,`;
    const para3 = document.createElement(`p`);
    para3.innerText=`Call in to serve yourself a spot preferably atleast a day early.`;
    const para4 = document.createElement(`p`);
    para4.innerText=`Chef Yuval Karif 2021© `;
    cont.appendChild(para1);
    cont.appendChild(para2);
    cont.appendChild(para3);
    cont.appendChild(para4);
    return cont;
  }
const elem=document.createElement(`div`);
elem.setAttribute(`id`,`aboutPage`);
elem.appendChild(contentMaker());
export default {elem};
