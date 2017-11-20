'use strict'


// const __API_URL__ = 'http://localhost:3000';

const __API_URL__ = ' https://moonscope.herokuapp.com'


$.get(`${__API_URL__}/api/v1/horoscope/libra`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#catherine').append(`<h2>Libra: ${data.horoscope}</h2`);
  });

$.get(`${__API_URL__}/api/v1/horoscope/aquarius`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#sarah').append(`<h2>Aquarius: ${data.horoscope}</h2`);
  });

$.get(`${__API_URL__}/api/v1/horoscope/scorpio`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#olivia').append(`<h2>Scorpio: ${data.horoscope}</h2`);
  });

$.get(`${__API_URL__}/api/v1/horoscope/cancer`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#jamie').append(`<h2>Cancer: ${data.horoscope}</h2`);
  });
