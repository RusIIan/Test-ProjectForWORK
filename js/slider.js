$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    adaptiveHeiht: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    draggable: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  
});
