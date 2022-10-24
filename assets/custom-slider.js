$(document).ready(function(){
    var $slider = $('#only-slider');
    $slider.slick({
        arrows: false,
        slidesToShow: Math.floor($('.collection-list-wrapper').width() / 200),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    console.log('Elements', Math.floor($('.collection-list-wrapper').width() / 200));
    $('.slider-mobile-gutter').show();
});