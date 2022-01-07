$('.header-top-wrapper .about-us-wrapper .slider-wrapper .owl-carousel').owlCarousel({
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
// slider 2
$('.product-wrapper .product-slider-wrapper .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
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