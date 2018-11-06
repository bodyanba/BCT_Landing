$(document).ready(function () {

  $(".owl-brands").owlCarousel({
    items: 9,
    autoplay: true,
    loop: true,
    dots: false,
  });

  $(".owl-2").owlCarousel({
    items: 1,
  });

  $(".owl-3").owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    dots: false,
    // nav: true,
    navText: ["", ""],
  });

});