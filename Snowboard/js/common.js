$(document).ready(function(){
    $('.slider__slides').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst:true
    })
    $('.action_one').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInUp', 
      offset: 200
    });
    $('.slide_textblack').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', 
      offset: 200
    });
    $('.details').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeIn', 
      offset: 200
    });
    setTimeout(function() {
      $('.action_two').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', 
        offset: 200
      });
      $('.slide_textwhite').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', 
        offset: 200
      });
    }, 5200);
    $('.slide_textblack').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated bounceInLeft', 
      offset: 200
    });
});

var handleMatchMedia = function(mediaQuery) {
  if (mediaQuery.matches) {
    $('.action_one').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
    $('.slide_textblack').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
    $('.details').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
    $('.action_two').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
    $('.slide_textwhite').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
    $('.slide_textblack').addClass("visible").viewportChecker({
      classToRemove: 'visible', 
      offset: 200
    });
  } else {}
},
mql = window.matchMedia('all and (max-width: 570px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia);

$(document).ready(function(){
    $('.slider__boards').slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '210px',
        arrows: true,
        prevArrow: '<div class="prev_arrow"> ⟨ </div>',
        nextArrow: '<div class="next_arrow"> ⟩ </div>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1380,
              settings: {
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1122,
              settings: {
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
              }
            }
          ]
    })
});

$(function() {
  $(window).scroll(function() {
      if($(this).scrollTop() != 0) { 
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });
   
  $('#toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);
  });
});

$(document).ready(function(){
  $('.features_slider').slick({
      arrows: true,
      autoplay: true,
      prevArrow: '<div class="prev_arrow"></div>',
      nextArrow: '<div class="next_arrow"></div>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 580,
            settings: {
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 2
            }
          }
        ]
  })
});