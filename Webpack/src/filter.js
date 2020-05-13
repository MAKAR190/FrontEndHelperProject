const categoriesBtn = document.querySelector('.categories-btn');
const scripts = document.querySelectorAll('#script');
const animations = document.querySelectorAll('#animation');
function filters({ target }) {
  if (target.dataset.action === 'scripts') {
    animations.style.display = 'none';
  } else if (target.dataset.action === 'animations') {
    scripts.style.display = 'none';
  }
}
categoriesBtn.addEventListener('click', filters);
