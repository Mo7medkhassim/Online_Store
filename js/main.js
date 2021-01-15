$(document).ready(function(){
// first slider
$('.slider-one')
.not('.slick-intialized')
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: '.site-slider .slider-btn .prev',
    nextArrow: '.site-slider .slider-btn .next'

});

// second slider
$('.slider-two').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    // slidesToScroll:1,
    // infinite: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
      prevArrow: '.site-slider-two .slider-btn .prev',
      nextArrow: '.site-slider-two .slider-btn .next'
});
});