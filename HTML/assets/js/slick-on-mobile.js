$(function() {
  $('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      dots: true,
      responsive: [
          {
              breakpoint: 600,
              settings: 'unslick'
          }
      ]
  });

  $(window).on('resize', function() {
      $('.slider').slick('resize');
  });
});