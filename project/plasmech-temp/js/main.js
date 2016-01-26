//var skrol = skrollr.init({ forceHeight: false });

var wow = new WOW(
  {
      boxClass: 'anim-in',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
  }
);
wow.init();

//tabs function
var pageTabs = function () {
    if ($('.tab-area').length > 0) {
        $('.tab-area .tab .open-tab a').click(function () {

            var parentTab = $(this).parents('.tab');
            var slideSpeed = 400;

            if (parentTab.hasClass('active')) {
                //if tab active
                parentTab.removeClass('active');
                parentTab.find('.tab-inner').slideUp(slideSpeed);
            }
            else {
                //if tab not active
                $('.tab-area .tab').removeClass('active');
                $('.tab-area .tab .tab-inner').slideUp(slideSpeed);
                parentTab.addClass('active');
                parentTab.find('.tab-inner').slideDown(slideSpeed);
            };

            return false;
        });
    }
};

var mobileBtn = function () {
    $('.mobile-nav-btn').click(function () {
        $(this).toggleClass('active');
        $('header#main-header nav#main-nav').slideToggle();
    });
};

var mobileSubnavBtn = function () {
    if ($('.article-subnav').length > 0) {
        $('.article-subnav > ul > li > span').click(function () {
            $(this).parent('li').find('ul').slideToggle();
            $(this).toggleClass('active');
        });
    }
}

var slickSliderInit = function () {
    if ($('.article-img-slider').length > 0) {
        $('.article-img-slider').slick({
            arrows: false,
            dots: true
        });
    }
};


$(document).ready(function () {
    mobileBtn();
    mobileSubnavBtn();
    slickSliderInit();
    pageTabs();
});