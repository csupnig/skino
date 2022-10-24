$(document).ready(function(){
    var $slider = $('#only-slider');
    $slider.slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    console.log('JQ', $slider.slick, $slider, Math.floor($('.collection-list-wrapper').width() / 200));
    $('.slider-mobile-gutter').show();
});