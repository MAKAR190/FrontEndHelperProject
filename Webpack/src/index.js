import './styles.css';
import './aboutUs.css';
import btn from '../js/arrow';
import scripts from '../server/scripts.json';
import video from '../server/video.json';
import nightMode from '../js/nightMode';

let array = scripts;
let view = 'all';

const menu = document.querySelector('.list');
function render(view) {
  switch (view) {
    case 'animation':
      array = scripts.filter(el => el.type === 'animation');
      break;
    case 'script':
      array = scripts.filter(el => el.type === 'script');
      break;

    default:
      array = scripts.slice(0);
      break;
  }
  const menuItems = array.reduce(
    (acc, el) =>
      (acc += `
<li class="list-item scripts">
  <img class="list-img" data-id ="${
    el.id
  }" src="${require(`${el.gifUrl}`)}" alt="">
<div id="forTovari" class="hover-box">
            <p class="quote">${el.paragraph}</p>
            <button  data-action=${el.id} class="modal">ОТКРЫТЬ</button></div>
  <a href="${el.download}" data-action="open" class="open">Скачать</a>
 
</li>
`),
    '',
  );
  menu.innerHTML = menuItems;
}
render(view);

const animationBtn = document.querySelector('#animation');
const button = document.querySelector('.categories-btn');
const clearBtn = document.querySelector('#clear');
function filters({ target }) {
  if (target.dataset.action === 'scripts') {
    view = 'script';
    render(view);
  } else if (target.dataset.action === 'animations') {
    view = 'animation';
    render(view);
    console.log(view);
  } else {
    view = 'all';
    render(view);
  }
}

animationBtn.addEventListener('click', filters);
button.addEventListener('click', filters);
clearBtn.addEventListener('click', filters);

let arr = video;
let viewVideo = 'all';
const menuVideo = document.querySelector('.listVideo');
function renderVideo(viewVideo) {
  switch (viewVideo) {
    case 'animationVideo':
      arr = video.filter(el => el.type === 'videoAnimation');
      break;
    case 'scriptVideo':
      arr = video.filter(el => el.type === 'videoScript');
      break;

    default:
      arr = video.slice(0);
      break;
  }
  const menuItemsVideo = arr.reduce(
    (acc, el) =>
      (acc += `
<li class="list-itemVideo scripts">
 <iframe width="450" height="315" src = ${el.videoSrc} data-id=${el.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</li>
`),
    '',
  );
  menuVideo.innerHTML = menuItemsVideo;
}
renderVideo(viewVideo);

const clearBtnVideo = document.querySelector('#clearVideo');
const scriptButton = document.querySelector('#scriptsVideoo');
const animationBtnVideo = document.querySelector('#animationVideo');
function filtersVideo({ target }) {
  if (target.dataset.action === 'scriptsVideo') {
    viewVideo = 'scriptVideo';
    renderVideo(viewVideo);
  } else if (target.dataset.action === 'animationsVideo') {
    viewVideo = 'animationVideo';
    renderVideo(viewVideo);
  } else {
    viewVideo = 'all';
    renderVideo(viewVideo);
  }
}

animationBtnVideo.addEventListener('click', filtersVideo);
scriptButton.addEventListener('click', filtersVideo);
clearBtnVideo.addEventListener('click', filtersVideo);

const body = document.querySelector('body');
const lightbox = document.querySelector('.js-lightbox');

const onclickBox = document.querySelector('.onclick');

const openBtn = document.querySelector('.modal');

const content = document.querySelector('.lightbox__content');
function openHandler({ target }) {
  if (target.classList.contains('modal')) {
    const find = scripts.find(el => target.dataset.action == el.id);
    const newFind = ` 
     <div class="onclick">
        
          <h2 class="onclick-tittle">${find.name}</h2>
        
          <div class="onclick-box">
            <img src="${find.gifUrl}" alt="" class="onclick-img">
            <p class="onclick-descr">${find.paragraph}</p>
          </div>
       
        </div>
    </div>
  `;
    content.innerHTML = newFind;
    console.log(find);

    lightbox.classList.add('is-open');
  }
}

menu.addEventListener('click', openHandler);
document
  .querySelector('.lightbox__button')
  .addEventListener('click', ({ target }) => {
    if (target.dataset.action === 'close-lightbox') {
      lightbox.classList.remove('is-open');
    }
  });
