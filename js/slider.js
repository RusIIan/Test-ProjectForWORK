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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  $(".project-slider").slick({
    dots: true,
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
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
          adaptiveHeiht: false,
          dots: false,
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
  });
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });
  $(document).ready(function () {
    $(".menu__burger").click(function () {
      $(".nav-min").addClass("active");
    });

    $(".close").click(function () {
      $(".nav-min").removeClass("active");
    });
  });
  $(document).ready(function () {
    $(".menu__burger").click(function () {
      $(".nav-min").addClass("active");
    });

    $(".close").click(function () {
      $(".nav-min").removeClass("active");
      closeAllMenus();
    });

    $(".dropdow").click(function (event) {
      event.preventDefault();
      closeAllMenus();
      $(this).find(".dropdow-menu").addClass("active");
    });

    // Обработчик клика для элемента с классом .back
    $(".back").click(function (event) {
      event.preventDefault();
      $(this).closest(".dropdow").find(".dropdow-menu").removeClass("active");
    });

    // Обработчик клика для элемента с классом .dropdow-menu
    $(".dropdow-menu").click(function (event) {
      event.stopPropagation();
      // Ваш код для обработки события на .dropdow-menu
    });

    function closeAllMenus() {
      $(".dropdow-menu").removeClass("active");
    }
  });
});
