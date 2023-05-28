$(function () {


  // Feedback form
  const phoneInput = document.querySelector('#phone');
  const phoneInputInner = document.querySelector('#phone-inner');
  const phoneInputFooter = document.querySelector('#phone-footer');
  const nameInput = document.querySelector('#name');
  const nameInputInner = document.querySelector('#name-inner');
  const nameInputFooter = document.querySelector('#name-footer');
  const formBtn = document.querySelector('#form-btn');
  const formBtnInner = document.querySelector('#form-btn-inner');
  const formBtnFooter = document.querySelector('#form-btn-footer');
  const maskOptions = {
      mask: '+7 (000) 000-00-00',
      lazy: false
  } ;

  let a, b;
  
  phoneInput.onfocus = () => {
    let mask = new IMask(phoneInput, maskOptions);
  }
  phoneInputInner.onfocus = () => {
    let mask = new IMask(phoneInputInner, maskOptions);
  }
  phoneInputFooter.onfocus = () => {
    let mask = new IMask(phoneInputFooter, maskOptions);
  }

  nameInput.onblur = () => {
    if (nameInput.value) {
      a = true;
      if (b === true) {
        formBtn.disabled = false;
      }
    }
  }
  nameInputInner.onblur = () => {
    if (nameInputInner.value) {
      a = true;
      if (b === true) {
        formBtnInner.disabled = false;
      }
    }
  }
  nameInputFooter.onblur = () => {
    if (nameInputFooter.value) {
      a = true;
      if (b === true) {
        formBtnFooter.disabled = false;
      }
    }
  }
  phoneInput.onblur = () => {
    if (phoneInput.value) {
      b = true;
      if (a === true) {
        formBtn.disabled = false;
      }
    }
  }
  phoneInputInner.onblur = () => {
    if (phoneInputInner.value) {
      b = true;
      if (a === true) {
        formBtnInner.disabled = false;
      }
    }
  }
  phoneInputFooter.onblur = () => {
    if (phoneInputFooter.value) {
      b = true;
      if (a === true) {
        formBtnFooter.disabled = false;
      }
    }
  }
  // ------- Feedback form

  // Modal windows
  const contactBtn = document.querySelector('.header__btn');
  const feedbackBtn = document.querySelector('.application__btn');
  const modalOverlay = document.querySelector('.modal-window__overlay');
  const closeContactBtn = document.querySelector('#contact--close');
  const closeFeedbackBtn = document.querySelector('#feedback--close');
  const modalContact = document.querySelector('.modal-window__contact');
  const modalFeedback = document.querySelector('.modal-window__feedback');

  contactBtn.onclick = () => {
    modalOverlay.classList.add('visible-overlay');
    modalContact.classList.add('visible-modal');
  }
  feedbackBtn.onclick = () => {
    modalOverlay.classList.add('visible-overlay');
    modalFeedback.classList.add('visible-modal');
  }
  closeContactBtn.onclick = () => {
    modalOverlay.classList.remove('visible-overlay');
    modalContact.classList.remove('visible-modal');
  }
  modalOverlay.onclick = () => {
    modalOverlay.classList.remove('visible-overlay');
    modalContact.classList.remove('visible-modal');
    modalFeedback.classList.remove('visible-modal');
  }
  closeFeedbackBtn.onclick = () => {
    modalOverlay.classList.remove('visible-overlay');
    modalFeedback.classList.remove('visible-modal');
  }
  //  ----------------- Modal windows

  // Mobile menu
  const mobileMenuBtn = document.querySelector('#mobilmenu-btn');
  const headerContactBtn = document.querySelector('#header__contact-btn');
  const headerNavList = document.querySelector('#header-nav');

  mobileMenuBtn.addEventListener('click', () =>{
    headerContactBtn.classList.toggle('none-mobile');
    headerNavList.classList.toggle('none-mobile');
  })
  headerNavList.addEventListener('click', () =>{
    headerContactBtn.classList.add('none-mobile');
    headerNavList.classList.add('none-mobile');
  })
  headerContactBtn.addEventListener('click', () =>{
    headerContactBtn.classList.add('none-mobile');
    headerNavList.classList.add('none-mobile');
  })
  //   --------------------Mobile menu

  //  Tabs services
  const tabsBtn = document.querySelectorAll ('[data-tabs-btn]');

  tabsBtn.forEach (function (item) {
    item.addEventListener ('click', function(event) {
      tabsBtn.forEach((btn) => {
        btn.classList.remove('services__tab--active');
      });
      event.target.classList.add('services__tab--active');
      const tabsCard = document.querySelector('#' + this.dataset.tabsBtn);
      document.querySelectorAll ('.services__tabscard').forEach (function (item) {
          item.classList.add ('none');
      });
      tabsCard.classList.remove ('none');
    });
  });
  //  ------------------Tabs services

  //  Slider
  $('.portfolio__mainslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    draggable: false,
    asNavFor: '.portfolio__secondslider'
  });
  $('.portfolio__secondslider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    infinite: true,
    asNavFor: '.portfolio__mainslider',
  });
  $('.our-clients__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    infinite: true,
  });
  //  --------Slider


})