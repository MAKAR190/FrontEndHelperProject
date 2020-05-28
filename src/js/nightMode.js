const round = document.querySelector('.round');
const homeSection = document.querySelector('.home-intro');
const header = document.querySelector('.header');
const mobileHeader = document.querySelector('.mobileHeader');
const mobileImg = document.querySelector('#forHeader');
const mobileImgTwo = document.querySelector('#TWOO');
const logo = document.querySelector('.header-img');
const slider = document.querySelectorAll('.article-wrap');
const goods = document.querySelector('.wrapper');
const gdTitle = document.querySelectorAll('.goodsTitle');
const ctItem = document.querySelectorAll('.categories-btn');
const article = document.querySelector('article');
const orders = document.querySelector('.orders-box');
const ordersSection = document.querySelector('.orders');
const orTitle = document.querySelector('.orders-tittle');
const orInput = document.querySelectorAll('.orders-input');
const orMessage = document.querySelector('.orders-message');
const footer = document.querySelector('.footer');
const auSection = document.querySelector('.section1');
const ourAdvantages = document.querySelector('.sectionAboutUs');
const body = document.querySelector('body');
const ourTitle = document.querySelector('.AboutUs-h1');
const card = document.querySelector('.aboutUs-photoCart1');
const cardTwo = document.querySelector('.aboutUs-photoCart2');
const cardThree = document.querySelector('.aboutUs-photoCart3');
const ourTeam = document.querySelector('.fone');
const memberName = document.querySelectorAll('.member-name');
const hoverBox = document.querySelectorAll('.hover-box');
const quote = document.querySelectorAll('.quote');
const feedbacksTitle = document.querySelector('.comments');
const feedbacksBox = document.querySelectorAll('.comment-text');
const feedbacks = document.querySelector('.feedbacks');
const foneTwo = document.querySelector('.foneTwo');
const commentName = document.querySelectorAll('.comment-name');
const job = document.querySelectorAll('.job');
const videogallery = document.querySelector('.Section1-VideoGallery');
const videosVideo = document.querySelector('.wrapperVideo');
const ctBtnVideo = document.querySelectorAll('.categories-btnVideo');
const itWrapper = document.querySelector('.MaxSection3-VideoGallery');
const ulItWrapper = document.querySelector('.ul-IT-wrapper');
const oneLogo = document.querySelector('#ONE');
const twoLogo = document.querySelector('#TWO');
const arrow = document.querySelector('.arrow');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
const bars = document.querySelector('.fa-bars');
const mobileRound = document.querySelector('.mobileRound');
const secondMoon = document.querySelector('#moon');
const secondSun = document.querySelector('#sun');
const menuMobile = document.querySelector('.menuMobile');
let mode = false;
function eventHandler({ target }) {
  if (mode === false) {
    mode = true;

    sun.style.display = 'none';
    moon.style.display = 'block';

    arrow.style.background = '#000';
    arrow.style.color = 'yellow';
    arrow.style.borderColor = 'yellow';
    arrow.style.transition = 1 + 's';
    oneLogo.style.display = 'none';
    twoLogo.style.display = 'block';

    ulItWrapper.style.background = '#000';
    ulItWrapper.style.transition = 1 + 's';

    itWrapper.style.background = '#090126';
    itWrapper.style.transition = 1 + 's';
    ctBtnVideo.forEach(el => {
      el.style.color = '#fff';
      el.style.transition = 1 + 's';
    });

    videosVideo.style.background = '#000';
    videosVideo.style.transition = 1 + 's';

    videogallery.style.backgroundImage = `url('./img/nightVideogallery.png')`;
    videogallery.style.transition = 1 + 's';
    job.forEach(el => {
      el.style.color = 'blue';
      el.style.transition = 1 + 's';
    });
    commentName.forEach(el => {
      el.style.color = '#fff';
      el.style.transition = 1 + 's';
    });
    foneTwo.style.background = '#090126';
    foneTwo.style.transition = 1 + 's';
    feedbacks.style.background = '#000';
    feedbacks.style.transition = 1 + 's';

    feedbacksBox.forEach(el => {
      el.style.background = '#090126';
      el.style.transition = 1 + 's';
    });

    feedbacksTitle.style.color = '#fff';
    feedbacksTitle.style.transition = 1 + 's';
    quote.forEach(el => {
      el.style.color = '#fff';
    });
    hoverBox.forEach(el => {
      el.style.background = 'rgba(0.1,0.1,0.1,0.5)';
    });
    memberName.forEach(el => {
      el.style.color = '#fff';
      el.style.transition = 1 + 's';
    });

    ourTeam.style.background = '#000';
    ourTeam.style.transition = 1 + 's';

    card.style.background = '#090126';
    card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
    card.style.transition = 1 + 's';
    card.style.backgroundRepeat = 'no-repeat';
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    cardTwo.style.background = '#090126';
    cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
    cardTwo.style.transition = 1 + 's';
    cardTwo.style.backgroundRepeat = 'no-repeat';
    cardTwo.style.backgroundSize = 'cover';
    cardTwo.style.backgroundPosition = 'center';

    cardThree.style.background = '#090126';
    cardThree.style.backgroundImage = `url(./img/каналы.png)`;
    cardThree.style.transition = 1 + 's';
    cardThree.style.backgroundRepeat = 'no-repeat';
    cardThree.style.backgroundSize = 'cover';
    cardThree.style.backgroundPosition = 'center';

    ourTitle.style.color = '#fff';
    ourTitle.style.transition = 1 + 's';
    body.style.background = '#000';
    body.style.transition = 1 + 's';
    ourAdvantages.style.background = '#000';
    ourAdvantages.style.transition = 1 + 's';

    auSection.style.backgroundImage = `url('./img/nightAU.png')`;
    auSection.style.transition = 1 + 's';

    footer.style.background = '#090126';
    footer.style.transition = 1 + 's';

    orMessage.style.background = '#fff';

    ordersSection.style.backgroundImage = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(68,68,68,0.5019607843137255) 48%, rgba(219,219,219,0) 100%)`;
    ordersSection.style.background = '#000';
    ordersSection.style.transition = 1 + 's';
    orTitle.style.color = '#fff';
    orTitle.style.transition = 1 + 's';
    orders.style.background = '#090126';
    orders.style.transition = 1 + 's';
    article.style.background = '#000';
    article.style.transition = 1 + 's';
    orInput.forEach(el => {
      el.style.background = '#fff';
    });
    slider.forEach(el => {
      el.style.background = '#000';
      el.style.transition = 1 + 's';
    });
    ctItem.forEach(element => {
      element.style.color = '#fff';
      element.style.transition = 1 + 's';
    });

    gdTitle.forEach(el => {
      el.style.background = '#000';
      el.style.color = '#fff';
      el.style.transition = 1 + 's';
    });
    goods.style.background = '#000';
    goods.style.transition = 1 + 's';
    header.style.background = '#000';
    header.style.transition = 1 + 's';

    homeSection.style.backgroundImage = `url('./img/nightHome.png')`;
    homeSection.style.transition = 1 + 's';

    round.style.background = '#1b1b48';
    round.style.transition = 1 + 's';
    round.style.color = 'purple';
    round.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
  } else if (mode === true) {
    foneTwo.style.background = '#f4f7fe';
    foneTwo.style.transition = 1 + 's';
    mode = false;

    sun.style.display = 'block';
    moon.style.display = 'none';

    arrow.style.background = '#1779ff';
    arrow.style.color = '#18a3dd';
    arrow.style.borderColor = 'black';
    arrow.style.transition = 1 + 's';

    oneLogo.style.display = 'block';
    twoLogo.style.display = 'none';

    ctBtnVideo.forEach(el => {
      el.style.color = '#000';
      el.style.transition = 1 + 's';
    });
    itWrapper.style.background = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
    itWrapper.style.transition = 1 + 's';

    videosVideo.style.transition = 1 + 's';
    videosVideo.style.backgroundImage = `url('./img/bgTovari.png')`;
    videosVideo.style.backgroundRepeat = 'no-repeat';
    videosVideo.style.backgroundPosition = 'center';
    videosVideo.style.backgroundSize = 'cover';

    videogallery.style.backgroundImage = `url('./img/1.png')`;
    videogallery.style.transition = 1 + 's';
    job.forEach(el => {
      el.style.color = '#140d61';
      el.style.transition = 1 + 's';
    });
    feedbacks.style.backgroundImage = `url('./img/bgTovari.png')`;
    feedbacks.style.backgroundRepeat = 'no-repeat';
    feedbacks.style.backgroundSize = 'cover';
    feedbacks.style.backgroundPosition = 'center';
    feedbacks.style.transition = 1 + 's';

    feedbacksBox.forEach(el => {
      el.style.background = '#f4f7fe';
      el.style.transition = 1 + 's';
    });

    feedbacksTitle.style.color = '#000';
    feedbacksTitle.style.transition = 1 + 's';

    quote.forEach(el => {
      el.style.color = '#1779ff';
    });

    hoverBox.forEach(el => {
      el.style.background = '#f4f7fe7e';
    });
    memberName.forEach(el => {
      el.style.color = '#000';
      el.style.transition = 1 + 's';
    });
    commentName.forEach(el => {
      el.style.color = '#000';
      el.style.transition = 1 + 's';
    });

    ulItWrapper.style.backgroundImage = `url('./img/фонГлавній.png')`;
    ulItWrapper.style.backgroundPosition = 'center';
    ulItWrapper.style.backgroundSize = 'cover';
    ulItWrapper.style.backgroundRepeat = 'no-repeat';
    ulItWrapper.style.transition = 1 + 's';

    ourTeam.style.backgroundImage = `url(./img/fon.png)`;
    ourTeam.style.backgroundSize = 'cover';
    ourTeam.style.transition = 1 + 's';

    cardTwo.style.background = '#0d246a';
    cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
    cardTwo.style.transition = 1 + 's';
    cardTwo.style.backgroundRepeat = 'no-repeat';
    cardTwo.style.backgroundSize = 'cover';
    cardTwo.style.backgroundPosition = 'center';

    cardThree.style.background = '#0d246a';
    cardThree.style.backgroundImage = `url(./img/каналы.png)`;
    cardThree.style.transition = 1 + 's';
    cardThree.style.backgroundRepeat = 'no-repeat';
    cardThree.style.backgroundSize = 'cover';
    cardThree.style.backgroundPosition = 'center';

    ourTitle.style.color = '#001c2f';
    ourTitle.style.transition = 1 + 's';
    body.style.background = '#fff';
    body.style.transition = 1 + 's';

    card.style.background = '#0d246a';
    card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
    card.style.transition = 1 + 's';
    card.style.backgroundRepeat = 'no-repeat';
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';

    ourAdvantages.style.background = '#fff';
    ourAdvantages.style.transition = 1 + 's';

    auSection.style.backgroundImage = `url('./img/МонтажнаОбласть1.png')`;
    auSection.style.transition = 1 + 's';

    footer.style.background = '#102560';
    footer.style.transition = 1 + 's';

    ordersSection.style.background = '#192672';
    ordersSection.style.transition = 1 + 's';

    orMessage.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;

    article.style.background = '#fff';
    article.style.transition = 1 + 's';

    orders.style.background = '#f4f7fe';
    orders.style.transition = 1 + 's';

    orTitle.style.color = '#090126';
    orTitle.style.transition = 1 + 's';

    header.style.backgroundImage = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
    header.style.transition = 1 + 's';

    orInput.forEach(el => {
      el.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;
    });
    slider.forEach(el => {
      el.style.background = '#102560';
      el.style.transition = 1 + 's';
    });
    ctItem.forEach(element => {
      element.style.color = '#001c2f';
      element.style.transition = 1 + 's';
    });

    homeSection.style.backgroundImage = `url('./img/bgHome.png')`;
    homeSection.style.transition = 1 + 's';
    gdTitle.forEach(el => {
      el.style.background = '#f4f7fe';
      el.style.color = '#001c2f';
      el.style.transition = 1 + 's';
    });
    goods.style.backgroundImage = `url('./img/bgTovari.png')`;
    goods.style.backgroundRepeat = 'no-repeat';
    goods.style.backgroundSize = 'cover';
    goods.style.backgroundPosition = 'center';

    round.style.color = 'steelblue';
    round.style.background = 'darkcyan';
    round.style.transition = 1 + 's';
    round.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
  }
}

function myFunction(x) {
  if (x.matches&&mode===true) {
    if (mode === false) {
      mode = true;

      menuMobile.style.background = 'rebeccapurple';

      bars.style.color = '#fff';
      secondSun.style.display = 'none';
      secondMoon.style.display = 'block';

      arrow.style.background = '#000';
      arrow.style.color = 'yellow';
      arrow.style.borderColor = 'yellow';
      arrow.style.transition = 1 + 's';
      mobileImg.style.display = 'none';
      mobileImgTwo.style.display = 'block';

      ulItWrapper.style.background = '#000';
      ulItWrapper.style.transition = 1 + 's';

      itWrapper.style.background = '#090126';
      itWrapper.style.transition = 1 + 's';
      ctBtnVideo.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });

      videosVideo.style.background = '#000';
      videosVideo.style.transition = 1 + 's';

      videogallery.style.backgroundImage = `url('./img/nightMobileVideogallery.png')`;
      videogallery.style.transition = 1 + 's';
      job.forEach(el => {
        el.style.color = 'blue';
        el.style.transition = 1 + 's';
      });
      commentName.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });
      foneTwo.style.background = '#090126';
      foneTwo.style.transition = 1 + 's';
      feedbacks.style.background = '#000';
      feedbacks.style.transition = 1 + 's';

      feedbacksBox.forEach(el => {
        el.style.background = '#090126';
        el.style.transition = 1 + 's';
      });

      feedbacksTitle.style.color = '#fff';
      feedbacksTitle.style.transition = 1 + 's';
      quote.forEach(el => {
        el.style.color = '#fff';
      });
      hoverBox.forEach(el => {
        el.style.background = 'rgba(0.1,0.1,0.1,0.5)';
      });
      memberName.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });

      ourTeam.style.background = '#000';
      ourTeam.style.transition = 1 + 's';

      card.style.background = '#090126';
      card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
      card.style.transition = 1 + 's';
      card.style.backgroundRepeat = 'no-repeat';
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';

      cardTwo.style.background = '#090126';
      cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
      cardTwo.style.transition = 1 + 's';
      cardTwo.style.backgroundRepeat = 'no-repeat';
      cardTwo.style.backgroundSize = 'cover';
      cardTwo.style.backgroundPosition = 'center';

      cardThree.style.background = '#090126';
      cardThree.style.backgroundImage = `url(./img/каналы.png)`;
      cardThree.style.transition = 1 + 's';
      cardThree.style.backgroundRepeat = 'no-repeat';
      cardThree.style.backgroundSize = 'cover';
      cardThree.style.backgroundPosition = 'center';

      ourTitle.style.color = '#fff';
      ourTitle.style.transition = 1 + 's';
      body.style.background = '#000';
      body.style.transition = 1 + 's';
      ourAdvantages.style.background = '#000';
      ourAdvantages.style.transition = 1 + 's';

      auSection.style.backgroundImage = `url('./img/nightMobileMan.png')`;
      auSection.style.transition = 1 + 's';

      footer.style.background = '#090126';
      footer.style.transition = 1 + 's';

      orMessage.style.background = '#fff';

      ordersSection.style.backgroundImage = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(68,68,68,0.5019607843137255) 48%, rgba(219,219,219,0) 100%)`;
      ordersSection.style.background = '#000';
      ordersSection.style.transition = 1 + 's';
      orTitle.style.color = '#fff';
      orTitle.style.transition = 1 + 's';
      orders.style.background = '#090126';
      orders.style.transition = 1 + 's';
      article.style.background = '#000';
      article.style.transition = 1 + 's';
      orInput.forEach(el => {
        el.style.background = '#fff';
      });
      slider.forEach(el => {
        el.style.background = '#000';
        el.style.transition = 1 + 's';
      });
      ctItem.forEach(element => {
        element.style.color = '#fff';
        element.style.transition = 1 + 's';
      });

      gdTitle.forEach(el => {
        el.style.background = '#000';
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });
      goods.style.background = '#000';
      goods.style.transition = 1 + 's';
      mobileHeader.style.background = '#000';
      mobileHeader.style.transition = 1 + 's';

      homeSection.style.backgroundImage = `url('./img/nightMobileComp.png')`;
      homeSection.style.transition = 1 + 's';

      mobileRound.style.background = '#1b1b48';
      mobileRound.style.transition = 1 + 's';
      mobileRound.style.color = 'purple';
      mobileRound.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
    } else if (mode === true) {
      menuMobile.style.backgroundImage = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
      foneTwo.style.background = '#f4f7fe';
      foneTwo.style.transition = 1 + 's';
      mode = false;


      mobileImg.style.display = 'block';
      mobileImgTwo.style.display = 'none';
      secondSun.style.display = 'block';
      secondMoon.style.display = 'none';

      arrow.style.background = '#1779ff';
      arrow.style.color = '#18a3dd';
      arrow.style.borderColor = 'black';
      arrow.style.transition = 1 + 's';


      ctBtnVideo.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });
      itWrapper.style.background = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
      itWrapper.style.transition = 1 + 's';

      videosVideo.style.transition = 1 + 's';
      videosVideo.style.backgroundImage = `url('./img/bgTovari.png')`;
      videosVideo.style.backgroundRepeat = 'no-repeat';
      videosVideo.style.backgroundPosition = 'center';
      videosVideo.style.backgroundSize = 'cover';

      videogallery.style.backgroundImage = `url('./img/vgMobile.png')`;
      videogallery.style.transition = 1 + 's';
      job.forEach(el => {
        el.style.color = '#140d61';
        el.style.transition = 1 + 's';
      });
      feedbacks.style.backgroundImage = `url('./img/bgTovari.png')`;
      feedbacks.style.backgroundRepeat = 'no-repeat';
      feedbacks.style.backgroundSize = 'cover';
      feedbacks.style.backgroundPosition = 'center';
      feedbacks.style.transition = 1 + 's';

      feedbacksBox.forEach(el => {
        el.style.background = '#f4f7fe';
        el.style.transition = 1 + 's';
      });

      feedbacksTitle.style.color = '#000';
      feedbacksTitle.style.transition = 1 + 's';

      quote.forEach(el => {
        el.style.color = '#1779ff';
      });

      hoverBox.forEach(el => {
        el.style.background = '#f4f7fe7e';
      });
      memberName.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });
      commentName.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });

      ulItWrapper.style.backgroundImage = `url('./img/фонГлавній.png')`;
      ulItWrapper.style.backgroundPosition = 'center';
      ulItWrapper.style.backgroundSize = 'cover';
      ulItWrapper.style.backgroundRepeat = 'no-repeat';
      ulItWrapper.style.transition = 1 + 's';

      ourTeam.style.backgroundImage = `url(./img/fon.png)`;
      ourTeam.style.backgroundSize = 'cover';
      ourTeam.style.transition = 1 + 's';

      cardTwo.style.background = '#0d246a';
      cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
      cardTwo.style.transition = 1 + 's';
      cardTwo.style.backgroundRepeat = 'no-repeat';
      cardTwo.style.backgroundSize = 'cover';
      cardTwo.style.backgroundPosition = 'center';

      cardThree.style.background = '#0d246a';
      cardThree.style.backgroundImage = `url(./img/каналы.png)`;
      cardThree.style.transition = 1 + 's';
      cardThree.style.backgroundRepeat = 'no-repeat';
      cardThree.style.backgroundSize = 'cover';
      cardThree.style.backgroundPosition = 'center';

      ourTitle.style.color = '#001c2f';
      ourTitle.style.transition = 1 + 's';
      body.style.background = '#fff';
      body.style.transition = 1 + 's';

      card.style.background = '#0d246a';
      card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
      card.style.transition = 1 + 's';
      card.style.backgroundRepeat = 'no-repeat';
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';

      ourAdvantages.style.background = '#fff';
      ourAdvantages.style.transition = 1 + 's';

      auSection.style.backgroundImage = `url('./img/AUphotoMobile.png')`;
      auSection.style.transition = 1 + 's';

      footer.style.background = '#102560';
      footer.style.transition = 1 + 's';

      ordersSection.style.background = '#192672';
      ordersSection.style.transition = 1 + 's';

      orMessage.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;

      article.style.background = '#fff';
      article.style.transition = 1 + 's';

      orders.style.background = '#f4f7fe';
      orders.style.transition = 1 + 's';

      orTitle.style.color = '#090126';
      orTitle.style.transition = 1 + 's';

      mobileHeader.style.backgroundImage = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
      mobileHeader.style.transition = 1 + 's';

      orInput.forEach(el => {
        el.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;
      });
      slider.forEach(el => {
        el.style.background = '#102560';
        el.style.transition = 1 + 's';
      });
      ctItem.forEach(element => {
        element.style.color = '#001c2f';
        element.style.transition = 1 + 's';
      });

      homeSection.style.backgroundImage = `url('./mobileImg/320 главная ст (1).png')`;
      homeSection.style.transition = 1 + 's';
      gdTitle.forEach(el => {
        el.style.background = '#f4f7fe';
        el.style.color = '#001c2f';
        el.style.transition = 1 + 's';
      });
      goods.style.backgroundImage = `url('./img/bgTovari.png')`;
      goods.style.backgroundRepeat = 'no-repeat';
      goods.style.backgroundSize = 'cover';
      goods.style.backgroundPosition = 'center';

      mobileRound.style.color = 'steelblue';
      mobileRound.style.background = 'darkcyan';
      mobileRound.style.transition = 1 + 's';
      mobileRound.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
    }
  } else if(mode===true){
    if (mode === false) {
      mode = true;

      sun.style.display = 'none';
      moon.style.display = 'block';

      arrow.style.background = '#000';
      arrow.style.color = 'yellow';
      arrow.style.borderColor = 'yellow';
      arrow.style.transition = 1 + 's';
      oneLogo.style.display = 'none';
      twoLogo.style.display = 'block';

      ulItWrapper.style.background = '#000';
      ulItWrapper.style.transition = 1 + 's';

      itWrapper.style.background = '#090126';
      itWrapper.style.transition = 1 + 's';
      ctBtnVideo.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });

      videosVideo.style.background = '#000';
      videosVideo.style.transition = 1 + 's';

      videogallery.style.backgroundImage = `url('./img/nightVideogallery.png')`;
      videogallery.style.transition = 1 + 's';
      job.forEach(el => {
        el.style.color = 'blue';
        el.style.transition = 1 + 's';
      });
      commentName.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });
      foneTwo.style.background = '#090126';
      foneTwo.style.transition = 1 + 's';
      feedbacks.style.background = '#000';
      feedbacks.style.transition = 1 + 's';

      feedbacksBox.forEach(el => {
        el.style.background = '#090126';
        el.style.transition = 1 + 's';
      });

      feedbacksTitle.style.color = '#fff';
      feedbacksTitle.style.transition = 1 + 's';
      quote.forEach(el => {
        el.style.color = '#fff';
      });
      hoverBox.forEach(el => {
        el.style.background = 'rgba(0.1,0.1,0.1,0.5)';
      });
      memberName.forEach(el => {
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });

      ourTeam.style.background = '#000';
      ourTeam.style.transition = 1 + 's';

      card.style.background = '#090126';
      card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
      card.style.transition = 1 + 's';
      card.style.backgroundRepeat = 'no-repeat';
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';

      cardTwo.style.background = '#090126';
      cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
      cardTwo.style.transition = 1 + 's';
      cardTwo.style.backgroundRepeat = 'no-repeat';
      cardTwo.style.backgroundSize = 'cover';
      cardTwo.style.backgroundPosition = 'center';

      cardThree.style.background = '#090126';
      cardThree.style.backgroundImage = `url(./img/каналы.png)`;
      cardThree.style.transition = 1 + 's';
      cardThree.style.backgroundRepeat = 'no-repeat';
      cardThree.style.backgroundSize = 'cover';
      cardThree.style.backgroundPosition = 'center';

      ourTitle.style.color = '#fff';
      ourTitle.style.transition = 1 + 's';
      body.style.background = '#000';
      body.style.transition = 1 + 's';
      ourAdvantages.style.background = '#000';
      ourAdvantages.style.transition = 1 + 's';

      auSection.style.backgroundImage = `url('./img/nightAU.png')`;
      auSection.style.transition = 1 + 's';

      footer.style.background = '#090126';
      footer.style.transition = 1 + 's';

      orMessage.style.background = '#fff';

      ordersSection.style.backgroundImage = `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(68,68,68,0.5019607843137255) 48%, rgba(219,219,219,0) 100%)`;
      ordersSection.style.background = '#000';
      ordersSection.style.transition = 1 + 's';
      orTitle.style.color = '#fff';
      orTitle.style.transition = 1 + 's';
      orders.style.background = '#090126';
      orders.style.transition = 1 + 's';
      article.style.background = '#000';
      article.style.transition = 1 + 's';
      orInput.forEach(el => {
        el.style.background = '#fff';
      });
      slider.forEach(el => {
        el.style.background = '#000';
        el.style.transition = 1 + 's';
      });
      ctItem.forEach(element => {
        element.style.color = '#fff';
        element.style.transition = 1 + 's';
      });

      gdTitle.forEach(el => {
        el.style.background = '#000';
        el.style.color = '#fff';
        el.style.transition = 1 + 's';
      });
      goods.style.background = '#000';
      goods.style.transition = 1 + 's';
      header.style.background = '#000';
      header.style.transition = 1 + 's';

      homeSection.style.backgroundImage = `url('./img/nightHome.png')`;
      homeSection.style.transition = 1 + 's';

      round.style.background = '#1b1b48';
      round.style.transition = 1 + 's';
      round.style.color = 'purple';
      round.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
    } else if (mode === true) {
      foneTwo.style.background = '#f4f7fe';
      foneTwo.style.transition = 1 + 's';
      mode = false;

      sun.style.display = 'block';
      moon.style.display = 'none';

      arrow.style.background = '#1779ff';
      arrow.style.color = '#18a3dd';
      arrow.style.borderColor = 'black';
      arrow.style.transition = 1 + 's';

      oneLogo.style.display = 'block';
      twoLogo.style.display = 'none';

      ctBtnVideo.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });
      itWrapper.style.background = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
      itWrapper.style.transition = 1 + 's';

      videosVideo.style.transition = 1 + 's';
      videosVideo.style.backgroundImage = `url('./img/bgTovari.png')`;
      videosVideo.style.backgroundRepeat = 'no-repeat';
      videosVideo.style.backgroundPosition = 'center';
      videosVideo.style.backgroundSize = 'cover';

      videogallery.style.backgroundImage = `url('./img/1.png')`;
      videogallery.style.transition = 1 + 's';
      job.forEach(el => {
        el.style.color = '#140d61';
        el.style.transition = 1 + 's';
      });
      feedbacks.style.backgroundImage = `url('./img/bgTovari.png')`;
      feedbacks.style.backgroundRepeat = 'no-repeat';
      feedbacks.style.backgroundSize = 'cover';
      feedbacks.style.backgroundPosition = 'center';
      feedbacks.style.transition = 1 + 's';

      feedbacksBox.forEach(el => {
        el.style.background = '#f4f7fe';
        el.style.transition = 1 + 's';
      });

      feedbacksTitle.style.color = '#000';
      feedbacksTitle.style.transition = 1 + 's';

      quote.forEach(el => {
        el.style.color = '#1779ff';
      });

      hoverBox.forEach(el => {
        el.style.background = '#f4f7fe7e';
      });
      memberName.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });
      commentName.forEach(el => {
        el.style.color = '#000';
        el.style.transition = 1 + 's';
      });

      ulItWrapper.style.backgroundImage = `url('./img/фонГлавній.png')`;
      ulItWrapper.style.backgroundPosition = 'center';
      ulItWrapper.style.backgroundSize = 'cover';
      ulItWrapper.style.backgroundRepeat = 'no-repeat';
      ulItWrapper.style.transition = 1 + 's';

      ourTeam.style.backgroundImage = `url(./img/fon.png)`;
      ourTeam.style.backgroundSize = 'cover';
      ourTeam.style.transition = 1 + 's';

      cardTwo.style.background = '#0d246a';
      cardTwo.style.backgroundImage = `url(./img/деньги.png)`;
      cardTwo.style.transition = 1 + 's';
      cardTwo.style.backgroundRepeat = 'no-repeat';
      cardTwo.style.backgroundSize = 'cover';
      cardTwo.style.backgroundPosition = 'center';

      cardThree.style.background = '#0d246a';
      cardThree.style.backgroundImage = `url(./img/каналы.png)`;
      cardThree.style.transition = 1 + 's';
      cardThree.style.backgroundRepeat = 'no-repeat';
      cardThree.style.backgroundSize = 'cover';
      cardThree.style.backgroundPosition = 'center';

      ourTitle.style.color = '#001c2f';
      ourTitle.style.transition = 1 + 's';
      body.style.background = '#fff';
      body.style.transition = 1 + 's';

      card.style.background = '#0d246a';
      card.style.backgroundImage = `url(./img/man-with-a-clock.png)`;
      card.style.transition = 1 + 's';
      card.style.backgroundRepeat = 'no-repeat';
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';

      ourAdvantages.style.background = '#fff';
      ourAdvantages.style.transition = 1 + 's';

      auSection.style.backgroundImage = `url('./img/МонтажнаОбласть1.png')`;
      auSection.style.transition = 1 + 's';

      footer.style.background = '#102560';
      footer.style.transition = 1 + 's';

      ordersSection.style.background = '#192672';
      ordersSection.style.transition = 1 + 's';

      orMessage.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;

      article.style.background = '#fff';
      article.style.transition = 1 + 's';

      orders.style.background = '#f4f7fe';
      orders.style.transition = 1 + 's';

      orTitle.style.color = '#090126';
      orTitle.style.transition = 1 + 's';

      header.style.backgroundImage = `linear-gradient(
      0deg,
      #130b60 0%,
      #1b3379 51%,
      #156a99 100%
    )`;
      header.style.transition = 1 + 's';

      orInput.forEach(el => {
        el.style.background = `rgba(255, 255, 255, 0.7019607843137254)`;
      });
      slider.forEach(el => {
        el.style.background = '#102560';
        el.style.transition = 1 + 's';
      });
      ctItem.forEach(element => {
        element.style.color = '#001c2f';
        element.style.transition = 1 + 's';
      });

      homeSection.style.backgroundImage = `url('./img/bgHome.png')`;
      homeSection.style.transition = 1 + 's';
      gdTitle.forEach(el => {
        el.style.background = '#f4f7fe';
        el.style.color = '#001c2f';
        el.style.transition = 1 + 's';
      });
      goods.style.backgroundImage = `url('./img/bgTovari.png')`;
      goods.style.backgroundRepeat = 'no-repeat';
      goods.style.backgroundSize = 'cover';
      goods.style.backgroundPosition = 'center';

      round.style.color = 'steelblue';
      round.style.background = 'darkcyan';
      round.style.transition = 1 + 's';
      round.style.filter = `drop-shadow(0 0 7.5px rgba(0,0,0,0.5))`;
    }
  }

}

round.addEventListener('click', eventHandler);
var x = window.matchMedia('(max-width: 450px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction);

