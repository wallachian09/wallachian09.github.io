var rightMenu = document.getElementById('leftMenu');
var menuRight = -65;

document.getElementById('left').onclick = sliderLeft;
var slider = document.getElementById('slider_wrapper');
var left = 0;

var main, about, portfolio, blog, content;
about = document.getElementById('about');
portfolio = document.getElementById('portfolio');
blog = document.getElementById('blog');
content = document.getElementById('content');
main = document.getElementById('home');
showHome ();
//SLIDER
function sliderRight () {
  left = left - 100;
  if (left < -100) {
    left = 0;
  }
  slider.style.left = left + '%';
}

function sliderLeft () {
  slider.style.left = 0 + '%';
}
document.getElementById('slider_wrapper').onclick = sliderRight;

//MENU
function menuSlide () {
  menuRight += 65;
  if (menuRight > 0) {
    menuRight = -65;
  }
  rightMenu.style.right = menuRight + '%';
}

function showHome () {
  $(main).show();
  $(about).hide();
  $(portfolio).hide();
  $(blog).hide();
  $(content).hide();
}

function showAbout () {
  $(main).hide();
  $(about).show();
  $(portfolio).hide();
  $(blog).hide();
  $(content).hide();
  menuSlide ();
}

function showPortfolio () {
  $(main).hide();
  $(about).hide();
  $(portfolio).show();
  $(blog).hide();
  $(content).hide();
  menuSlide ();
}

function showBlog () {
  $(main).hide();
  $(about).hide();
  $(portfolio).hide();
  $(blog).show();
  $(content).hide();
  menuSlide ()
}

function showContent () {
  $(main).hide();
  $(about).hide();
  $(portfolio).hide();
  $(blog).hide();
  $(content).show();
  menuSlide ();
}

//GALLERY
function showSC () {
  $(".second_col").show();
  $(".third_col").show();
}







/*if(window.matchMedia('(min-width: 315px)').matches){
  $(".second_col").hide();
  $(".third_col").hide();
} else if (window.matchMedia('(max-width: 575px)').matches){
  $(".second_col").hide();
  $(".third_col").hide();
}

function showGallery () {
  var cols = [$(".second_col"), $(".third_col")]
  cols[0].show;
}*/