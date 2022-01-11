$(document).ready(function () {
  $('#owl-one').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})
$(document).ready(function () {
  // slider 2
  $('#owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 5
      }
    }
  })
  $('#owl-two .owl-nav').removeClass('disabled');
  $('#owl-two .owl-nav').click(function () {
    $(this).removeClass('disabled');
  })
})