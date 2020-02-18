window.onload = function() {
    setTimeout(function() {
        $('#preloader').addClass("hidden").viewportChecker({
        classToAdd: 'invisible animated fadeOut', 
        offset: 200
    }); }, 3200);
};

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

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
});

$(document).ready(function () {
    $('.wheel').ready(function(){
        $('a[href^="#"]').click(function () {
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
            return false;
        });
    });
});
var handleMatchMedia = function(mediaQuery) {
if (mediaQuery.matches) {
        showShop ();
    } else {}
},
mql = window.matchMedia('all and (min-width: 575px)');
handleMatchMedia(mql);
mql.addListener(handleMatchMedia);

$(document).ready(function () {
    $('#newgen').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', 
        offset: 200
    });
    $('#tweets').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn', 
        offset: 200
    });
    $('.first').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight', 
        offset: 200
    });
    $('.second').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', 
        offset: 200
    });
    $('.third').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp', 
        offset: 200
    });
    $('.shop2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', 
        offset: 200
    });
    $('.shop3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', 
        offset: 200
    });
    $('.img1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', 
        offset: 200
    });
    $('.img2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', 
        offset: 200
    });
    $('.img3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceIn', 
        offset: 200
    });
});

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst:true
    })
});

function showShop () {
    $(".shop2").show();
    $(".shop3").show();
}