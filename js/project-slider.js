$(document).ready(function () {
  $(".project-slider").slick({
    dots: false,
    adaptiveHeiht: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true,
    // draggable: false,
    asNavFor: ".project-text-slider",
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeiht: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          adaptiveHeiht: false,
        },
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: true,
          adaptiveHeiht: false,
        },
      },
    ],
    asNavFor: ".project-text-slider",
  });
  $(".project-text-slider").slick({
    arrows: false,
    adaptiveHeiht: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    asNavFor: ".project-slider",
  });
});
