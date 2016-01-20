var skrol = skrollr.init();

var wow = new WOW(
  {
      boxClass: 'anim-in',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
  }
);
wow.init();


$(document).ready(function(){
    $('.article-img-slider').slick({
        arrows: false,
        dots: true
    });
});