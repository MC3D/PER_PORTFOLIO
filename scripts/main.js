$(function() {
  'use strict';
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
    // var x = $('#nav').height() * 2;
    $('html, body').animate({
      scrollTop: ($('#section-skills').offset().top)
    }, 500); // 500 milliseconds

  });

  $('#nav-link-projects').on('click', function() {
    $('.nav-list').css('display', 'none');
    $('html, body').animate({
      scrollTop: ($('#section-projects').offset().top)
    }, 500); // 500 milliseconds
  });

  $('#nav-link-timeline').on('click', function() {
    $('.nav-list').css('display', 'none');
    $('html, body').animate({
      scrollTop: ($('#section-timeline').offset().top)
    }, 500); // 500 milliseconds
  });

  $('#nav-link-contact').on('click', function() {
    $('.nav-list').css('display', 'none');
    $('html, body').animate({
      scrollTop: ($('#section-contact').offset().top)
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
