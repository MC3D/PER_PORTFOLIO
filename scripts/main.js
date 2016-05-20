$(function() {
  'use strict';
  var y = $('#nav').offset().top;
  var x = 0;

  $('.nav-link').on('click', function(event) {
    var text = 'section-' + (event.target.innerText).toLowerCase();
    if($(window).width() >= 1170) {
      x = $('#nav').height();
    }
    $('.nav-list').css('display', 'none');
    $('html, body').animate({
      scrollTop: ($('#' + text).offset().top - x)
    }, 500); // 500 milliseconds
    x = 0;
  });

  $('.toggle-button').on('click', function() {
    var display = $('.nav-list').css('display');
    if (display === 'none') {
      $('.nav-list').css('display', 'flex');
    } else {
      $('.nav-list').css('display', 'none');
    }

  });

  // store the elements returned by selectors in variables; avoids repeat querying of DOM
  var $animationElements = $('.timeline-event');
  var $window = $(window);



  function checkAnimationElements(){
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animationElements, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var elementBottomPosition = (elementTopPosition + elementHeight);

    if ((elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)) {
      $element.find('.timeline-icon, .timeline-content').addClass('bounce-in');
    } else {
      $element.find('.timeline-icon, .timeline-content').removeClass('bounce-in');
    }
  });
}






  // var timelineEvents = $('.timeline-event'),
  //   offset = 0.8;
  //
  // function hideEvents(events, offset) {
  //   events.each(function() {
  //     if ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) {
  //       $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
  //     }
  //   });
  // }
  //
  // function showEvents(events, offset) {
  //   events.each(function() {
  //     if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) {
  //       $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
  //     }
  //   });
  // }

  //hide timeline events which are outside the viewport
  // hideEvents(timelineEvents, offset);

  $(window).on('scroll resize', function() {
    if (y <= $(window).scrollTop()) {
      // if so, add the fixed class
      $('#nav').addClass('fixed');
    } else {
      // otherwise remove it
      $('#nav').removeClass('fixed');
    }

    checkAnimationElements();

    // window.requestAnimationFrame(showEvents);

    // (!window.requestAnimationFrame) ? setTimeout(function() {
    //   showEvents(timelineEvents, offset);
    // }, 100): window.requestAnimationFrame(function() {
    //   showEvents(timelineEvents, offset);
    // });
  });

$window.trigger('scroll');

});
