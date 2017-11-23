'use strict'


// const __API_URL__ = 'http://localhost:3000';

const __API_URL__ = ' https://moonscope.herokuapp.com'


$.get(`${__API_URL__}/api/v1/horoscope/libra`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#catherine').append(`<h2 id="catherine-horoscope">Libra: ${data.horoscope}, ${data.date}</h2`);
    $('#catherine-horoscope').hide();
  });

$.get(`${__API_URL__}/api/v1/horoscope/aquarius`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#sarah').append(`<h2 id="sarah-horoscope">Aquarius: ${data.horoscope}, ${data.date}</h2`);
    $('#sarah-horoscope').hide();
  });

$.get(`${__API_URL__}/api/v1/horoscope/scorpio`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#olivia').append(`<h2 id="olivia-horoscope">Scorpio: ${data.horoscope}, ${data.date}</h2`);
    $('#olivia-horoscope').hide();
  });

$.get(`${__API_URL__}/api/v1/horoscope/cancer`)
  .then(data => {
    data = JSON.parse(data);
    console.log(data);
    $('#jamie').append(`<h2 id="jamie-horoscope">Cancer: ${data.horoscope}, ${data.date}</h2`);
    $('#jamie-horoscope').hide();
  });
