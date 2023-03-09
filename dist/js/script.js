/* $(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>'
    });
  }); */

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    nav: false,
    autoplay: false,
    controls: false,
    speed: 1200,
    responsive: {
        320: {
          nav: true,
          edgePadding: 20,
          gutter: 20, 
        },
        576: {
          nav: true,
        },
        992: {
          nav: false,
        },
        1200: {
            nav: false,
        }
    }    
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  }); 
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  }); 


  $(function() {
      
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $('.catalog-item__content').addClass('catalog-item__content_active');
      $('.catalog-item__list').removeClass('catalog-item__list_active');
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

  });

  //Modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
 
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

function validateForms(form){
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Пожалуйста, введите свое имя",
      phone: "Пожалуйста, введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введен адрес почты"
      }
    }
  });
};
validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

$('input[name=phone').mask("+7 (999) 999-9999");

//Smooth scroll and page up

$(window).scroll(function(){
  if($(this).scrollTop() > 1400) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#up']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
new WOW().init();