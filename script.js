$(document).ready(function() {
  var owl = $('.owl-carousel');

owl.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  // smartSpeed: 3000,
  autoplayTimeout:5000,
  items: 1,
  animateOut: 'fadeOut'

});
$(".owl-next").html(
  '<img class="arrow-icon arrow-icon-next" src="assets/icons/nav-icon-right.svg"/>'
);
$(".owl-prev").html(
  '<img class="arrow-icon arrow-icon-next" src="assets/icons/nav-icon-left.svg"/>'
);

owl.on('translate.owl.carousel', function(e) {
  var index = e.item.index;
  $('.card_image').removeClass('animate__animated animate__fadeIn animate__delay-2s');
  $('.card_image').eq(index).addClass('animate__animated animate__fadeIn animate__delay-2s');
  $('.card_details').removeClass('animate__animated animate__fadeIn animate__delay-1s');
  $('.card_details').eq(index).addClass('animate__animated animate__fadeIn animate__delay-1s');

});

});
