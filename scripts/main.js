// $( document ).ready(
//   $(window).on('scroll', function() {
//     $('.timeline-event').each(function() {
//       if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('timeline-icon').hasClass('is-hidden')) {
//         $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
//       }
//     });
//   }));


$(function () {
  'use strict';
    var y = $('#nav').offset().top;
    console.log(y);

    $(window).on('scroll', function () {
        if (y <= $(window).scrollTop()) {
            // if so, add the fixed class
            $('#nav').addClass('fixed');
        } else {
            // otherwise remove it
            $('#nav').removeClass('fixed');
        }
    });
});
