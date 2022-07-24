import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import exchangeRate from './plant.js';

function clearResults () {
  $('.showErrors').text("");
  $('.showResults').text("");
}

function getElements(response) {
  if (response.conversion_result) {
    $('.showResults').text(`The total exchange ${response.conversion_result}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#exchange').click(function() {
    let location = $('#location').val();
    let location2 = $('#location2').val();
    let amount = $('#amount').val();
    exchangeRate.getExchange(location, location2, amount)
      .then(function(response) {
        getElements(response);
      });
  });
});

$('#refresh').click(function() {
  clearResults();
});
