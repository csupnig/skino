$(document).ready(function(){
    var $slider = $('#only-slider');
    $slider.slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    console.log('JQ', $slider.slick, $slider, $slider.width());
    $('.slider-mobile-gutter').show();
});