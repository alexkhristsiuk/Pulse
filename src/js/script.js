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
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        320: {
          edgePadding: 20,
          gutter: 20,
          nav: true,
        },
        768: {
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
