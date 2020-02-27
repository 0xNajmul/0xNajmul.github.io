// Activate Wow
new WOW().init();

//Owl Carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
});
$('.play').on('click', function() {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function() {
    owl.trigger('stop.owl.autoplay')
})

//Jquery Scrollup
$(function() {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
        scrollText: '', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });
});

//Slider 
$('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})

//Preloader
$(window).on('load', function(event) {
    $('#preloader').delay(500).fadeOut(500);
});

//Navbar 
$(window).on('scroll', function(event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
        $(".header_navbar").removeClass("sticky");
        $(".header_navbar img").attr("src", "images/logo-rev.png");
    } else {
        $(".header_navbar").addClass("sticky");
        $(".header_navbar img").attr("src", "images/logo.png");
    }
});


//Isotope
var $grid = $('.grid').isotope({
    getSortData: {
        catagory: '[data-category]',
    },
    sortBy: ['catagory']
});