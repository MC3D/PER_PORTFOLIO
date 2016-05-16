$(function() {
  'use strict';
  var y = $('#nav').offset().top;
  console.log(y);

  //on scolling, show/animate timeline events when enter the viewport
  $(window).on('scroll', function() {
    if (y <= $(window).scrollTop()) {
      // if so, add the fixed class
      $('#nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#nav').removeClass('fixed');
    }

    (!window.requestAnimationFrame) ? setTimeout(function() {
      showEvents(timelineEvents, offset);
    }, 100): window.requestAnimationFrame(function() {
      showEvents(timelineEvents, offset);
    });
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

  $('.toggle-button').on('click', function() {
    var display = $('.nav-list').css('display');
    if (display === 'none') {
      $('.nav-list').css('display', 'flex');
    } else {
      $('.nav-list').css('display', 'none');
    }

  });

  var timelineEvents = $('.timeline-event'),
    offset = 0.8;

  function hideEvents(events, offset) {
    events.each(function() {
      if ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) {
        $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
      }
    });
  }

  function showEvents(events, offset) {
    events.each(function() {
      if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) {
        $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  }

  //hide timeline events which are outside the viewport
  hideEvents(timelineEvents, offset);

});
