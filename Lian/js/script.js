var rightMenu = document.getElementById('leftMenu');
var menuRight = -65;

// document.getElementById('left').onclick = sliderLeft;
// var slider = document.getElementById('slider_wrapper');
// var left = 0;


var main, about, portfolio, blog, content;
about = document.getElementById('about');
portfolio = document.getElementById('portfolio');
blog = document.getElementById('blog');
content = document.getElementById('content');
main = document.getElementById('home');
//SLIDER
// function sliderRight () {
//   left = left - 100;
//   if (left < -100) {
//     left = 0;
//   }
//   slider.style.left = left + '%';
// }

// function sliderLeft () {
//   slider.style.left = 0 + '%';
// }
// document.getElementById('slider_wrapper').onclick = sliderRight;
// $('#slider_wrapper').slick({
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     mobileFirst:true
// });
var swiper = new Swiper('.big-slider', {
  effect: 'cube',
  loop: true,
  grabCursor: true,
  speed: 1400,
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
//MENU
function menuSlide () {
  menuRight += 65;
  $("body").css("overflow-y", "hidden");
  if (menuRight > 0) {
    menuRight = -65;
    $("body").css("overflow-y", "scroll");
  }
  rightMenu.style.right = menuRight + '%';
}

function hideMenu () {
  if (menuRight == 65) {
    menuRight = -65;
  }
  rightMenu.style.right = menuRight + '%';
}

// $('#tags_links > a').on('click',function(e){
//   e.preventDefault();
//   $(this).toggleClass('clicked');
// });

$('.tags-links > a').click(function () {
  if ($(this).hasClass('clicked')) {
    $(this).removeClass('clicked')
  } else {
    $(this).addClass('clicked');
  }
});


var handleMatchMedia = function(mediaQuery) {
  if (mediaQuery.matches) {
    $('.team-slider').slick({
      autoplay: true,
      dots: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: true
          }
        },
      ]
    });
    $('.au-slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  } else {
    $('.team-slider').slick('unslick');
    $('.au-slider').slick('unslick');
  }
},
mql = window.matchMedia('all and (max-width: 1100px)');
cql = window.matchMedia('all and (max-width: 801px)');
handleMatchMedia(mql);
handleMatchMedia(cql);
mql.addListener(handleMatchMedia);
cql.addListener(handleMatchMedia);


//GALLERY
function showSC () {
  $(".second_col").show();
  $(".third_col").show();
}
