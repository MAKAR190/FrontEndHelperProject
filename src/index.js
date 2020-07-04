import './styles.css';
import './aboutUs.css';
import btn from './js/arrow';
import { scripts, video } from './server/scripts.js';
import nightMode from './js/nightMode';
let array = scripts;
let view = 'all';

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

document.body.onload = function () {
  setTimeout(function () {
    const preloader = document.querySelector('.preloader');
    if (!preloader.classList.contains('.done')) {
      preloader.classList.add('done');
    }
  }, 2000);
};

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
<li data-aos="flip-up" class="list-item scripts">
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
<li data-aos="flip-up" class="list-itemVideo scripts">
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

const ordersBtn = document.querySelector('.orders-btn');
ordersBtn.addEventListener('click', forOrders);

function forOrders(e) {
  e.preventDefault();
  const inputEmail = document.querySelector('#forEmail');
  const inputName = document.querySelector('#forName');
  const inputDescr = document.querySelector('#forDescription');
  if (inputEmail === '' && inputName === '' && inputDescr === '') {
    return;
  } else {
    const object = {
      recipients: ['lutskyimakar@gmail.com'],
      fromName: 'MK',
      params: [
        {
          key: 'email',
          value: inputEmail.value,
        },
        {
          key: 'name',
          value: inputName.value,
        },
        {
          key: 'text',
          value: inputDescr.value,
        },
      ],
    };
    fetch(`https://esputnik.com/api/v1/message/2228660/send`, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: 'Basic bHV0c2t5aW1ha2FyQGdtYWlsLmNvbTpGRVBlbWFpbFBhcjE=',
      },
    })
      .then(res => res.json())
      .then(data => {
        inputName.value = '';
        inputEmail.value = '';
        inputDescr.value = '';
      })
      .catch(err => new Error(err));
  }
}

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
