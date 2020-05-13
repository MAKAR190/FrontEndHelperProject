const body = document.querySelector('body');
const list = document.querySelector('.list');

const onclickBox = document.querySelector('.onclick');
const onclickBoxTwo = document.querySelector('.onclickTwo');
const onclickBoxThree = document.querySelector('.onclickThree');

const openBtn = document.querySelector('.open');
const openBtnTwo = document.querySelector('.openTwo');
const openBtnThree = document.querySelector('.openThree');

const closeBtn = document.querySelector('.close');
const closeBtnTwo = document.querySelector('.closeTwo');
const closeBtnThree = document.querySelector('.closeThree');

function openHandler({ target }) {
  if (target.dataset.action === 'open') {
    onclickBox.style.display = 'block';
    onclickBox.style.background = '#f0e68c';
    body.style.background = 'rgba(0.1,0.1,0.1,0.5)';
    body.style.transition = 1 + 's';
    list.style.display = 'none';
  } else if (target.dataset.action === 'close') {
    onclickBox.style.display = 'none';
    body.style.background = '#fff';
    list.style.display = 'flex';
  }
  if (target.dataset.action === 'openTwo') {
    onclickBoxTwo.style.display = 'block';
    onclickBoxTwo.style.background = '#f0e68c';
    body.style.background = 'rgba(0.1,0.1,0.1,0.5)';
    body.style.transition = 1 + 's';
    list.style.display = 'none';
  } else if (target.dataset.action === 'closeTwo') {
    onclickBoxTwo.style.display = 'none';
    body.style.background = '#fff';
    list.style.display = 'flex';
  }

  if (target.dataset.action === 'openThree') {
    onclickBoxThree.style.display = 'block';
    onclickBoxThree.style.background = '#f0e68c';
    body.style.background = 'rgba(0.1,0.1,0.1,0.5)';
    body.style.transition = 1 + 's';
    list.style.display = 'none';
  } else if (target.dataset.action === 'closeThree') {
    onclickBoxThree.style.display = 'none';
    body.style.background = '#fff';
    list.style.display = 'flex';
  }
}
openBtn.addEventListener('click', openHandler);
openBtnTwo.addEventListener('click', openHandler);
openBtnThree.addEventListener('click', openHandler);

closeBtn.addEventListener('click', openHandler);
closeBtnTwo.addEventListener('click', openHandler);
closeBtnThree.addEventListener('click', openHandler);
