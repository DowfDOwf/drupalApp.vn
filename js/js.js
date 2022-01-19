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
      1024: {
        items: 3
      },
      1440: {
        items: 5
      }
    }
  })
  $('#owl-third').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    center: false,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 4
      },
      1024: {
        items: 4
      },
      1440: {
        items: 4
      }
    }
  })
  $('#owl-two .owl-nav').removeClass('disabled');
  $('#owl-two .owl-nav').click(function () {
    $(this).removeClass('disabled');
  })
  // Menu scroll to
  $('ul.menu.nav.navbar-nav a#home').click(function () {
    $('html, body').animate({
      scrollTop: $(".header-top-wrapper").offset().top
    }, 1000);
  })
  $('ul.menu.nav.navbar-nav a#introduce').click(function () {
    $('html, body').animate({
      scrollTop: $(".introduce-wrapper").offset().top
    }, 1000);
  })
  $('ul.menu.nav.navbar-nav a#feature').click(function () {
    $('html, body').animate({
      scrollTop: $(".feature-wrapper").offset().top
    }, 1000);
  })
  $('ul.menu.nav.navbar-nav a#project').click(function () {
    $('html, body').animate({
      scrollTop: $(".product-wrapper").offset().top
    }, 1000);
  })
  $('ul.menu.nav.navbar-nav a#contact').click(function () {
    $('html, body').animate({
      scrollTop: $(".contact-wrapper").offset().top
    }, 1000);
  })
  // Menu responsive
  $('.btn-menu').click(function () {
    $('.main-menu-wrapper').toggleClass('active');
  })
  $('.btn-menu').mouseleave(function () {
    $('.main-menu-wrapper').removeClass('active');
  })
})
