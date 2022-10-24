$(document).ready(function(){
    var $slider = $('.custom-slick-slider-{{ section.id }}');
    $slider.slick({
        arrows: false,
        slidesToShow: Math.floor($slider.width() / 200),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.slider-mobile-gutter').show();
});