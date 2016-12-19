"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var cars = 3;

function formatCars(carsJSON) {

  var string = '<div class="row">';
  // this function should return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  //   <h2>Chevrolet</h2>
  // <p><strong>Model:</strong> Tahoe</p>
  // <p><strong>Year:</strong> 2012</p>

  for (var i = 0; i < carsJSON.length; i++) {
    string += `<div class="col-md-4 car"><h2>${carsJSON[i].Make}</h2><p><strong>Model:</strong> ${carsJSON[i].Model}</p><p><strong>Year:</strong> ${carsJSON[i].Year}</p></div>`;
  }

  return string + "</div>";
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  var carString = formatCars(carsJSON);
  $('#cars').append(carString);
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  var url = `http://mimeocarlisting.azurewebsites.net/api/cars/${cars}/3`

  $.ajax({
    url: url,
    contentType: 'application/json',
    dataType: 'jsonp',
  }).then(response =>{
    debugger
    addCarsToDOM(response);
    cars++;
  })

}
