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
// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}
