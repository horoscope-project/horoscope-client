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
    $( '#catherine-horoscope' ).toggle('slow', () => {
    });
  });

  $('#sarah').on('click',() => {
    $( '#sarah-horoscope' ).toggle('slow', () => {
    });
  });

  $('#olivia').on('click', () => {
    $( '#olivia-horoscope' ).toggle('slow', () => {
    });
  });

  $('#jamie').on('click', () => {
    $( '#jamie-horoscope' ).toggle('slow', () => {
    });
  });

  horoscopeView.addNewFriend = () => {
    $('#friend').toggle();
  }

  $('#addNewFriend').on('click', () => {
    horoscopeView.addNewFriend();
  })

  module.horoscopeView = horoscopeView;
})(app);

var astrologicalsign;

$('#submitnewfriend').on('click', (event) => {
  event.preventDefault();
  var firstname = $('input[name="firstname"]').val();
  astrologicalsign = $('input[name="astrologicalsign"]').val();
  console.log(astrologicalsign);
  $('#myfriends').append(`<h1 id="${firstname}">${firstname}</h1>`);

  $.get(`${__API_URL__}/api/v1/horoscope/${astrologicalsign}`)
    .then(data => {
      data = JSON.parse(data);
      console.log('newfriend', data);
      $(`#${firstname}`).append(`<h2 id="${firstname}-horoscope">${astrologicalsign}: ${data.horoscope}, ${data.date}</h2`);
      // $(`#${firstname}-horoscope`).append(`<button id="delete" type="button" name="button">Delete</button>`);
      // $('#delete').on('click', () => {
      //   $(`#${firstname}`).remove();
      // })
      var fontColor = ['black','darkSlateGray','darkMagenta', 'goldenrod', 'lightBlue', 'lightseagreen', 'olive', 'orangered', 'orange', 'rosybrown'];
      var randomColor = fontColor[Math.floor(Math.random() * fontColor.length)];
      $(`#${firstname}`).css('color',randomColor);
      $(`#${firstname}-horoscope`).hide();
      $(`#${firstname}`).on('click', () => {
        $(`#${firstname}-horoscope`).toggle('slow'), () => {}
      })
    })
})

$(document).ready(function() {
  app.horoscopeView.initIndexPage();
})
