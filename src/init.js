import Pic1 from './karif.png';
function picComp() {
    const karifPhoto = new Image();
  karifPhoto.src = Pic1;
  karifPhoto.setAttribute(`id`,`logo`);
    return karifPhoto;
}
const cont = document.createElement("div");
const headline = document.createElement("div");
headline.setAttribute(`id`,`headline`);
cont.setAttribute(`id`,`content`);
document.body.appendChild(cont);
cont.appendChild(headline);
const title = document.createElement('h1');

const header = document.createElement(`div`);

title.innerText=`Yuval's Home Kitchen`;

header.setAttribute(`id`,`header`);


function headerMaker() {
  const ul =document.createElement('ul');
  const li = {
    c1:[document.createElement('li'),`home`],
    c2:[document.createElement('li'),`menu`],
    c3:[document.createElement('li'),`about`],}
    
  for(const prop in li ){
      const liElem = li[prop][0];
      const elem = document.createElement('a');
      elem.setAttribute(`id`,`${li[prop][1]}`);
      elem.innerText=li[prop][1];
      liElem.appendChild(elem);
      ul.appendChild(liElem);
      
    }
    return ul;
  }
  headline.appendChild(picComp());
  headline.appendChild(title);
  
  cont.appendChild(header);
  header.appendChild(headerMaker());

 
 

