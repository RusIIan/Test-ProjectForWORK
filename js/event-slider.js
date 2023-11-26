// $(document).ready(function () {
//   $(".event-slider").slick({
//     dots: false,
//     adaptiveHeiht: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     speed: 1000,
//     initialSlide: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     centerMode: true,
//     responsive: [
//       {
//         breakpoint: 750,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         },
//       }
//     ],
//   });
// });

// let menuBtn = document.querySelector(".menu__burger");
// let menu = document.querySelector(".nav-min");
// let closeBtn = document.querySelector(".close");
// menuBtn.addEventListener("click", function () {
//   menu.classList.add("active");
// });
// closeBtn.addEventListener("click", function () {
//   menu.classList.remove("active");
// });
// document.addEventListener("DOMContentLoaded", function () {
//   let dropdownToggles = document.querySelectorAll(".submenu"); // Найти элементы, которые должны открывать dropdown-menu
//   let dropdownMenus = document.querySelectorAll(".submenu__items"); // Найти все dropdown-menu
//   dropdownToggles.forEach(function (dropdownToggle, index) {
//     dropdownToggle.addEventListener("click", function (event) {
//       event.preventDefault(); // Остановить действие по умолчанию (например, переход по ссылке)
//       closeAllMenus(); // Закрыть все другие dropdown-menu
//       if (dropdownMenus[index].classList.contains("active")) {
//         dropdownMenus[index].classList.remove("active"); // Если dropdown-menu уже открыто, закрыть его
//       } else {
//         dropdownMenus.forEach(function (menu) {
//           menu.classList.remove("active"); // Закрыть все другие dropdown-menu
//         });
//         dropdownMenus[index].classList.add("active"); // Открыть выбранное dropdown-menu
//       }
//     });
//   });
//   function closeAllMenus() {
//     dropdownMenus.forEach(function (menu) {
//       menu.classList.remove("active");
//     });
//   }
//   let menuBtn = document.querySelector(".menu__burger");
//   let mobileMenu = document.querySelector(".nav-min");
//   let closeBtn = document.querySelectorAll(".close");
//   menuBtn.addEventListener("click", function () {
//     mobileMenu.classList.add("active");
//   });
//   closeBtn.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       mobileMenu.classList.remove("active");
//       closeAllMenus(); // Закрыть все dropdown-menu при закрытии мобильного меню
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let menuBtn = document.querySelector(".menu__burger");
//   let mobileMenu = document.querySelector(".nav-min");
//   let closeBtn = document.querySelectorAll(".close");

//   menuBtn.addEventListener("click", function () {
//     mobileMenu.classList.add("active");
//   });

//   closeBtn.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//       mobileMenu.classList.remove("active");
//       closeAllMenus();
//     });
//   });

//   let dropdowToggles = document.querySelectorAll(".dropdow");
//   let dropdowMenus = document.querySelectorAll(".dropdow-menu");
//   let backBtn = document.querySelectorAll(".back");

//   dropdowToggles.forEach(function (dropdowToggle, index) {
//     dropdowToggle.addEventListener("click", function (event) {
//       event.preventDefault();
//       dropdowMenus[index].classList.add("active");
//     });
//   });

//   backBtn.forEach(function (back, index) {
//     back.addEventListener("click", function () {
//       dropdowMenus[index].classList.remove("active");
//     });
//   });

// });
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
