function contentMaker(){
    const menuList =document.createElement('ul');
    const item = {
      c1:[document.createElement('li'),`Yesterday's Stir Fry`,`the stir fry is made from anything that is in the fridge and that i feel like adding`,`47₪`],
      c2:[document.createElement('li'),`"Iraqian Tacos"`,`tacos with something`,`39₪`],
      c3:[document.createElement('li'),`Fat af Springrolls`,`rice wraps with shit, served with special peanut sauce`,`36₪`],}
      
    for(const prop in item ){
          //making the elements of each item
        const itemElement = item[prop][0];
        const itemName = document.createElement('div');
        const itemDesc = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemCont = document.createElement('div');
        //Setting id`s
        itemCont.setAttribute(`id`,`itemDiv`);
        itemDesc.setAttribute(`id`,`itemDesc`);
        itemName.setAttribute(`id`,`${item[prop][1]}`);
        //Text
        itemName.innerText=item[prop][1];
        itemDesc.innerText=item[prop][2];
        itemPrice.innerText=item[prop][3];
        //Ordering in the dom
        itemCont.appendChild(itemName);
        itemCont.appendChild(itemPrice);
        itemElement.appendChild(itemCont);
        itemElement.appendChild(itemDesc);
        menuList.appendChild(itemElement);
        
      }
      return menuList;
    }
  
const elem=document.createElement(`div`);
elem.setAttribute(`id`,`menuPage`);
elem.appendChild(contentMaker());
export default {elem};
