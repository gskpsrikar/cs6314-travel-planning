function validateDates() {
    var checkInDate = document.getElementById("checkInDate").value;
    var checkOutDate = document.getElementById("checkOutDate").value;

    if (checkInDate === "" || checkOutDate === "") {
      alert("Please enter both check-in and check-out dates.");
      return false;
    }

    var checkInTimestamp = Date.parse(checkInDate);
    var checkOutTimestamp = Date.parse(checkOutDate);

    if (isNaN(checkInTimestamp) || isNaN(checkOutTimestamp) || checkOutTimestamp < checkInTimestamp) {
      alert("Please enter valid check-in and check-out dates.");
      return false;
    }
    return true;
  }


function displayHotelForm() {
    var form = document.getElementById("hotelForm");
    form.style.display = "flex";
};

document.getElementById('bookButton').addEventListener('click', function() {
    saveInputValues();
    $populateTable();
});

function saveInputValues() {
  var hotelCity = document.getElementById('city');
  var hotelCheckInDate = document.getElementById('checkInDate');
  var hotelCheckOutDate = document.getElementById('checkOutDate');

  localStorage.setItem('hotelCity', hotelCity.value);
  localStorage.setItem('hotelCheckInDate', hotelCheckInDate.value);
  localStorage.setItem('hotelCheckOutDate', hotelCheckOutDate.value);
};


// XML string with hotel information
var hotelsXML = `<?xml version="1.0" encoding="UTF-8"?>
    <hotels>
      <hotel>
        <name>Embassy Suites</name>
        <price>110</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>La Quinta by Wyndham</name>
        <price>85</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Hyatt Regency</name>
        <price>180</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>The Westin</name>
        <price>120</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Courtyard by Marriot</name>
        <price>170</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Double Tree by Hilton Hotel</name>
        <price>90</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>The Renaissance</name>
        <price>80</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Mainstay Suites</name>
        <price>75</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>The Beeman Hotel</name>
        <price>55</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Hampton Inn & Suites</name>
        <price>115</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
    </hotels>`;

  function $populateTable() {

    // Parse XML string into XML DOM object
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(hotelsXML, "text/xml");
    var hotels = xmlDoc.getElementsByTagName("hotel");
    $("#tableDiv").empty();
    // Display hotel information in the table
    var content = "<table id='hotelTable'><thead><tr><th>City</th><th>Hotel Name</th><th>Check-in Date</th><th>Check-out Date</th><th>Price</th><th>Choose Hotel</th></tr></thead>"
    content += "</table>"

    $('#tableDiv').append(content);

    var $tableBody = $("#hotelTable");
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i];
      var city = localStorage.getItem("hotelCity");
      var name = hotel.getElementsByTagName("name")[0].textContent;
      var checkInDate = localStorage.getItem("hotelCheckInDate");
      var checkOutDate = localStorage.getItem("hotelCheckOutDate");
      var price = hotel.getElementsByTagName("price")[0].textContent;
  
      var $row = $(`<tr id="hotel${i}">`).append(
        $("<td>").text(city),
        $("<td>").text(name),
        $("<td>").text(checkInDate),
        $("<td>").text(checkOutDate),
        $("<td>").text(price),
      );
      const $radioItem = $(`<input type="checkbox" name="hotel" id="${i}">`);
      $row.append($('<td>').append($radioItem));
      $tableBody.append($row);
  
      document.getElementById(`${i}`).addEventListener('click', function() {
        handleRadioSelection(this.id); // Pass the unique row ID as an argument
        toggleOpacity(this.id);
      });
    };
  }

function toggleOpacity(rowId) {
  const checkbox = document.getElementById(rowId);
  const row = document.getElementById("hotel"+rowId);
  if (checkbox.checked) {
    row.style.opacity = 0.5;
  }
  else {
    row.style.opacity = 1;
  }
};

function handleRadioSelection(rowId) {
  const row = document.getElementById("hotel"+rowId);
  var selected_hotel = {
    "city": row.cells[0].textContent, 
    "hotel": row.cells[1].textContent, 
    "checkin":row.cells[2].textContent,
    "checkout": row.cells[3].textContent,
    "price": row.cells[4].textContent
  };

  localStorage.setItem("selected_hotel", JSON.stringify(selected_hotel));
};

function handleCartButton(){
  var selected_hotel = JSON.parse(localStorage.getItem('selected_hotel'));
  var cart = JSON.parse(localStorage.getItem('cart'));
  
  if (cart === null){
    var cart = {'selected_hotel': selected_hotel};
  }
  else{
    cart.selected_hotel = selected_hotel;
  }
  alert("Adding to the cart: "+ selected_hotel.hotel);
  localStorage.setItem('cart', JSON.stringify(cart))
};

$(document).ready(function() {
  // Parse XML string into XML DOM object
  $("#add_to_cart").empty();
  const cartImage = $('<img />', {
    id: "cart_logo",
    src: '../images/cart.png',
    alt: 'Cart Icon',
    width: '48',
    height: '48',
    click: handleCartButton
  });
  $("#add_to_cart").append(cartImage);
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(hotelsXML, "text/xml");
  var hotels = xmlDoc.getElementsByTagName("hotel");
  $("#dummyTableDiv").empty();
  // Display hotel information in the table
  var content = "<table id='hotelTable'><thead><tr><th>City</th><th>Hotel Name</th><th>Check-in Date</th><th>Check-out Date</th><th>Price</th></tr></thead></table>"
  content += ""

  $('#dummyTableDiv').append(content);

  var $tableBody = $("#dummyTableDiv");
  
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    var city = hotel.getElementsByTagName("city")[0].textContent;
    var name = hotel.getElementsByTagName("name")[0].textContent;
    var checkInDate = hotel.getElementsByTagName("hotelCheckInDate")[0].textContent;
    var checkOutDate = hotel.getElementsByTagName("hotelCheckOutDate")[0].textContent;
    var price = hotel.getElementsByTagName("price")[0].textContent;

    var $row = $(`<tr id="hotel${i}">`).append(
      $("<td>").text(city),
      $("<td>").text(name),
      $("<td>").text(checkInDate),
      $("<td>").text(checkOutDate),
      $("<td>").text(price),
    );
    $tableBody.append($row);
  };
});
