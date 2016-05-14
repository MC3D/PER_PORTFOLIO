$(function() {
  'use strict';
  var x = $('#nav').height() * 3;
  var y = $('#nav').offset().top;
  console.log(y);

  $(window).on('scroll', function() {
    if (y <= $(window).scrollTop()) {
      // if so, add the fixed class
      $('#nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#nav').removeClass('fixed');
    }
  });

  $('#nav-link-skills').on('click', function() {
    $('.nav-list').css('display', 'none');
    $('html, body').animate({
      scrollTop: ($('#section-skills').offset().top - x)
    }, 500); // 500 milliseconds

  });

  $('#nav-link-projects').on('click', function() {
    $('html, body').animate({
      scrollTop: ($('#section-projects').offset().top - x)
    }, 500); // 500 milliseconds
  });

  $('#nav-link-timeline').on('click', function() {
    $('html, body').animate({
      scrollTop: ($('#section-timeline').offset().top - x)
    }, 500); // 500 milliseconds
  });

  $('#nav-link-contact').on('click', function() {
    $('html, body').animate({
      scrollTop: ($('#section-contact').offset().top - x)
    }, 500); // 500 milliseconds
  });

  $('.toggle-button').on('click', function(){
    var display = $('.nav-list').css('display');
    if(display === 'none'){
      $('.nav-list').css('display', 'flex');
    } else {
      $('.nav-list').css('display', 'none');
    }

  });
});
