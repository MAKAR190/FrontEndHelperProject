import './styles.css';
import openHandler from '../js/openHandler';
import btn from '../js/arrow';
import filters from '../js/filter';
import scripts from '../server/scripts.json';
import * as basicLightbox from 'basiclightbox';


const htmlInstance = basicLightbox.create(document.querySelector('#html'));
document.querySelector('button.html').onclick = htmlInstance.show;




const menu = document.querySelector('.list');
const menuItems = scripts.reduce((acc, el) => acc += (`
<li class="list-item scripts">
  <img class="list-img" data-id ="${el.id}" src="${require(`${el.gifUrl}`)}" alt="">
  <div data-action="open" class="open">Открыть</div>
</li>
`), "");
menu.innerHTML = menuItems;

// const categoriesBtn = document.querySelector('.categories-item');
// const all = document.querySelector('#all');
// const scripts = document.querySelector('#scripts');
// const animations = document.querySelector('#animations');
// function filters({ target }) {
//   if (target.dataset.action === 'scripts') {

//     if (scripts.type === 'animation') {
         
//     }

//     else if (scripts.type === 'scripts') {
      
//     }

//   }
//   else if (target.dataset.action === 'animations') {

//     if (scripts.type === 'animation') {

//     }

//     else if (scripts.type === 'scripts') {

//     }

//   }
// }
// categoriesBtn.addEventListener('click', filters);
