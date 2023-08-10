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
  }

document.getElementById('bookButton').addEventListener('click', function() {
    saveInputValues();
    $populateTable();
});

// Function to save input values to localStorage
function saveInputValues() {
  var hotelCity = document.getElementById('city');
  var hotelCheckInDate = document.getElementById('checkInDate');
  var hotelCheckOutDate = document.getElementById('checkOutDate');

  localStorage.setItem('carCity', hotelCity.value);
  localStorage.setItem('carPickUpDate', hotelCheckInDate.value);
  localStorage.setItem('carDropDate', hotelCheckOutDate.value);
}


// XML string with hotel information
var hotelsXML = `<?xml version="1.0" encoding="UTF-8"?>
    <hotels>
      <hotel>
        <name>Ford Mustang</name>
        <price>110</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Toyota Camry</name>
        <price>85</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Toyota Supra</name>
        <price>180</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Toyota Corolla</name>
        <price>120</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Honda Civic</name>
        <price>170</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Honda CR-V</name>
        <price>90</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Honda Accord</name>
        <price>80</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Hyundai Tucson</name>
        <price>75</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Nissan Rouge</name>
        <price>55</price>
        <city>Los Angeles</city>
        <hotelCheckInDate>2023-07-01</hotelCheckInDate>
        <hotelCheckOutDate>2023-07-02</hotelCheckOutDate>
      </hotel>
      <hotel>
        <name>Nissan GT-R</name>
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
      var city = localStorage.getItem("carCity");
      var name = hotel.getElementsByTagName("name")[0].textContent;
      var checkInDate = localStorage.getItem("carPickUpDate");
      var checkOutDate = localStorage.getItem("carDropDate");
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
    "car": row.cells[1].textContent, 
    "checkin":row.cells[2].textContent,
    "checkout": row.cells[3].textContent,
    "price": row.cells[4].textContent
  };

  localStorage.setItem("selected_car", JSON.stringify(selected_hotel));
};

function handleCartButton(){
  var selected_car = JSON.parse(localStorage.getItem('selected_car'));
  var cart = JSON.parse(localStorage.getItem('cart'));
  
  if (cart === null){
    var cart = {'selected_car': selected_car};
  }
  else{
    cart.selected_car = selected_car;
  }
  alert("Adding to the cart: "+ selected_car.car);
  localStorage.setItem('cart', JSON.stringify(cart))
};

$(document).ready(function() {
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
  // Parse XML string into XML DOM object
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(hotelsXML, "text/xml");
  var hotels = xmlDoc.getElementsByTagName("hotel");
  $("#dummyTableDiv").empty();
  // Display hotel information in the table
  var content = "<table id='hotelTable'><thead><tr><th>City</th><th>Hotel Name</th><th>Check-in Date</th><th>Check-out Date</th><th>Price</th></tr></thead>"
  content += "</table>"

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