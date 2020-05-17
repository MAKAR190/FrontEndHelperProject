window.addEventListener('scroll', function btn() {
  const btn = document.querySelector('.arrow');
  if (pageYOffset >= 100) {
    btn.style.opacity = 1;
    btn.style.display = 'block';
  } else {
    btn.style.opacity = 0;
  }
});


