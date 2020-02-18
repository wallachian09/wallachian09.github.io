/*document.querySelector('#search').onclick = function(){
    var x = document.querySelector('#search_area');
    x.style.width = x.style.width == '80%'?'45%':'80%';
    x.style.opacity = x.style.opacity == '1'?'0':'1';
};*/

document.querySelector('#search').onclick = function(){
    var x = document.querySelector('#search_area');
    if ($(window).width() < 600) {
        x.style.width = x.style.width == '80%'?'45%':'80%';
        x.style.opacity = x.style.opacity == '1'?'0':'1';
    }
    x.focus();
};

document.querySelector('#dropdown').onclick = function(){
    var a = document.querySelector('.arrow');
    var y = document.querySelector('.navbar');
    y.style.height = y.style.height == '11px'?'211px':'11px';
};

$('.slider_slides').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.review_slider').slick({
    arrows: true,
    prevArrow: '<div class="prev_arrow">&#8249</div>' ,
    nextArrow: '<div class="next_arrow">&#8250</div>',
    infinite: true,
    horizontal: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 180,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 315,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});

var wow = new WOW(
    {
      boxClass:     'wow',
      animateClass: 'animated',
      offset:       0,
      mobile:       true,
      live:         true,
      scrollContainer: null,
      resetAnimation: true,
    }
  );
  wow.init();