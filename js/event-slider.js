$(document).ready(function () {
  $(".event-slider").slick({
    dots: false,
    adaptiveHeiht: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      }
    ],
  });
});
