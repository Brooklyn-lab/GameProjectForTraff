//----Format Webp---------
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});

jQuery(document).ready(function () {
  let burger_icon = $('.header__burger');
  let menu = $('.navigation, .header__form');
  let acc = $('.footer__title_accord');
  let btn = $('.games__btn');
  let cards = $('.games__cards');
  let popup = $('.popup__content');
  let close = $('.popup__close');
  let link_login = $('#login_pop');
  let popup_reg = $('#popup_reg');
  let popup_login = $('#popup_login');
  let link_registration = $('#registration_pop');

  //----Popup-----
  $('#button_reg').click(function () {
    popup_reg.addClass('active');
  });

  $('#button_log').click(function () {
    popup_login.addClass('active');
  });

  $(document).mouseup(function (e) {
    if (!popup.is(e.target) && popup.has(e.target).length === 0) {
      popup_reg.removeClass('active');
      popup_login.removeClass('active');
    } else if (close.is(e.target)) {
      popup_reg.removeClass('active');
      popup_login.removeClass('active');
    }
  });

  link_login.on('click', function () {
    popup_reg.removeClass('active');
    popup_login.addClass('active');
  });

  link_registration.on('click', function () {
    popup_login.removeClass('active');
    popup_reg.addClass('active');
  });

  //---Burger-----

  burger_icon.on('click', function () {
    menu.toggleClass('active');
  });

  //--------- Слайдер games -----------

  $(function () {
    $('.games__cards').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnDotsHover: true,
      dots: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    });

    btn.on('click', function () {
      var filterClass = $(this).data('value');
      btn.removeClass('active');
      $(this).addClass('active');
      cards.slick('slickUnfilter');
      cards.slick('slickFilter', filterClass);
    });
  });

  //--------- Слайдер presentation -----------

  $('.presentation__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // appendDots: $('.presentation__wrapper'),
  });

  //--------- Слайдер feedback -----------

  $('.feedback__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  //-------- Обрезка текста и добавление ... в конце текста (feedback - блок)

  var w = window.innerWidth;
  if (w < 992) {
    (function () {
      const cropElement = document.querySelectorAll('.feedback__text-hide'),
        size = 161;
      endCharacter = '...';

      cropElement.forEach((el) => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
          text = text.substr(0, size);
          el.innerHTML = text + endCharacter;
        }
      });
    })();
  }

  //----------Accordion--------

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
});
