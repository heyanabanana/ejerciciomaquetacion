$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,

  // autoplay:true,
  // smartSpeed: 3000,
  // autoplayTimeout:7000,
  items: 1,
});
$(".owl-next").html(
  '<img class="arrow-icon arrow-icon-next" src="assets/icons/nav-icon-right.svg"/>'
);
$(".owl-prev").html(
  '<img class="arrow-icon arrow-icon-next" src="assets/icons/nav-icon-left.svg"/>'
);
