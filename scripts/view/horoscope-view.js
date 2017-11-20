'use strict';

var app = app || {};

((module) => {
  var horoscopeView = {};

  horoscopeView.initIndexPage = () => {
    $('#catherine-horoscope').hide();
    $('#sarah-horoscope').hide();
    $('#olivia-horoscope').hide();
    $('#jamie-horoscope').hide();
  }

  $('#catherine').on('click', () => {
    $( '#catherine-horoscope' ).toggle( 'slow', () => {
    });
  });

  $('#sarah').on('click',() => {
    $( '#sarah-horoscope' ).toggle( 'slow', () => {
    });
  });

  $('#olivia').on('click', () => {
    $( '#olivia-horoscope' ).toggle( 'slow', () => {
    });
  });

  $('#jamie').on('click', () => {
    $( '#jamie-horoscope' ).toggle( 'slow', () => {
    });
  });

  module.horoscopeView = horoscopeView;
})(app);

$(document).ready(function() {
  app.horoscopeView.initIndexPage();
})
