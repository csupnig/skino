$(document).ready(function(){
    var $slider = $('#only-slider');
    var elements = Math.floor($('.collection-list-wrapper').width() / 200);
    if (elements > 2) {
        $slider.slick({
            arrows: false,
            slidesToShow: elements,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        console.log('Elements', elements);
        $('.slider-mobile-gutter').show();
    }
});