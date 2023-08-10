
var datetimeElement = document.getElementById("datetime");

setInterval(function () {
  var currentDateTime = new Date();

  var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var formattedDate = currentDateTime.toLocaleDateString(undefined, dateOptions);
  var formattedTime = currentDateTime.toLocaleTimeString(undefined, timeOptions);

  datetimeElement.innerHTML = formattedDate + " " + formattedTime;
}, 1000); // Refresh every 1000 ms


function changeColor() {
  var colorPicker = document.getElementById('colorPicker');
  var color = colorPicker.value;

  localStorage.setItem('background-color', colorPicker.value);

  var applyBtn = document.getElementById('applyBtn');

  document.body.style.backgroundColor = color;
  var complementaryColor = getComplementaryColor(color);
  document.body.style.color = complementaryColor;

  localStorage.setItem('backgroundColor', color);
};

document.addEventListener('DOMContentLoaded', function () {
  setBackgroundColorFromLocalStorage();
});

function setBackgroundColorFromLocalStorage() {
  var storedColor = localStorage.getItem('background-color');
  if (storedColor) {
    document.body.style.backgroundColor = storedColor;
    document.body.style.color = getComplementaryColor(storedColor);
    colorPicker.value = storedColor;
  }
};

function getComplementaryColor(color) {
  var hexColor = color.substring(1);
  var rgb = parseInt(hexColor, 16);

  var red = (rgb >> 16) & 255;
  var green = (rgb >> 8) & 255;
  var blue = rgb & 255;

  var invertedRed = 255 - red;
  var invertedGreen = 255 - green;
  var invertedBlue = 255 - blue;

  var invertedHexColor = "#" + ((invertedRed << 16) | (invertedGreen << 8) | invertedBlue).toString(16).padStart(6, '0');

  return invertedHexColor;
};

function $displayCart() {
  var cart = JSON.parse(localStorage.getItem('cart'));

  if (cart == null){
    return;
  }

  var onward_flight = cart['selected_onward_flight'];
  var return_flight = cart['selected_return_flight'];
  var hotel = cart['selected_hotel'];
  var car = cart['selected_car'];
  

  var price = 0;

  if (onward_flight != null){
    $("#onward_flight_info_in_cart").empty();
    $("#onward_flight_info_in_cart").append(`Selected flight (onward): <br> ${JSON.stringify(onward_flight)}<br>`);
    price += parseFloat( onward_flight['price']);
  }
  if (return_flight != null & localStorage.getItem('tripType')==='roundTrip'){
    $("#return_flight_info_in_cart").empty();
    $("#return_flight_info_in_cart").append(`Selected flight (return): <br> ${JSON.stringify(return_flight)}<br>`);
    price += parseFloat(return_flight['price']);
  }
  if (hotel != null){
    $("#hotel_info_in_cart").empty();
    $("#hotel_info_in_cart").append(`Selected hotel: <br>${JSON.stringify(hotel)}<br>`);
    price += parseFloat(hotel['price']);
  }
  if (car != null){
    $("#car_info_in_cart").empty();
    $("#car_info_in_cart").append(`Selected car: <br>${JSON.stringify(car)}<br>`);
    price += parseFloat(car['price']);
  }
  
  $("#price_info_in_cart").empty();
  $("#price_info_in_cart").append(`TOTAL Price: $${price}`);
}