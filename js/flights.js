
function showReturnDateInput() {
    var tripType = document.getElementById("tripType").value;
    
    var returnFields = document.getElementsByClassName("roundTrip");

    for (var i = 0; i < returnFields.length; i++) {
        if (tripType === "roundTrip") {
            returnFields[i].style.display = "flex";
        } else {
            returnFields[i].style.display = "none";
        }
    }
  }


function togglePassengerForm() {
    var passengerForm = document.getElementById("passengerForm");
    if (passengerForm.style.display === "none") {
        passengerForm.style.display = "block";
    } else {
        passengerForm.style.display = "none";
    }
}

document.getElementById('bookFlightSelectButton').addEventListener('click', function() {
    saveInputValues();
    var tripType = localStorage.getItem('tripType');
    if (tripType == 'oneWay'){
        $populateTable('oneWay');
        document.getElementById("returnTableDiv").innerHTML = "";
        
    } else {
        $populateTable('oneWay');
        $populateTable('roundTrip');
    }
});

function saveInputValues() {
    var tripType = document.getElementById('tripType')
    var origin = document.getElementById('origin'); 
    var destination = document.getElementById('destination');
    var onwardDepartureDate = document.getElementById('onwardDepartureDate');
    var onwardArrivalDate = document.getElementById('onwardArrivalDate');
    var returnDepartureDateInput = document.getElementById('returnDepartureDateInput');
    var returnArrivalDateInput = document.getElementById('returnArrivalDateInput');

    var adults = document.getElementById('adults');
    var children = document.getElementById('children');
    var infants = document.getElementById('infants');

    localStorage.setItem('tripType', tripType.value);
    localStorage.setItem('origin', origin.value);
    localStorage.setItem('destination', destination.value);
    localStorage.setItem('onwardDepartureDate', onwardDepartureDate.value);
    localStorage.setItem('onwardArrivalDate', onwardArrivalDate.value);
    localStorage.setItem('returnDepartureDateInput', returnDepartureDateInput.value);
    localStorage.setItem('returnArrivalDateInput', returnArrivalDateInput.value);

    localStorage.setItem('adults', adults.value);
    localStorage.setItem('children', children.value);
    localStorage.setItem('infants', infants.value);

    console.log('Input values saved!');
};

// XML string with hotel information
var hotelsXML = `<?xml version="1.0" encoding="UTF-8"?>
    <flights>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>10:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>15:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>11:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>15:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>12:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>17:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>13:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>18:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>14:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>19:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>15:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>20:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>16:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>21:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>17:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>22:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>18:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>23:00</arrivaltime>
            <price>350</price>
        </flight>
        <flight>
            <origin>Dallas</origin>
            <destination>Austin</destination>
            <departuredate>2023-08-01</departuredate>
            <departuretime>09:00</departuretime>
            <arrivaldate>2021-08-01</arrivaldate>
            <arrivaltime>14:00</arrivaltime>
            <price>350</price>
        </flight>
    <flights>
    `;

  function $populateTable(tripType) {
    if (tripType === "oneWay"){
        var table_div_name = "onwardTableDiv";
        var table_id = "onwardTable";
        var prefix = 0;
    } else {
        var table_div_name = "returnTableDiv";
        var table_id = "returnTable";
        var prefix = 10;
    }

    // Parse XML string into XML DOM object
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(hotelsXML, "text/xml");
    var hotels = xmlDoc.getElementsByTagName("flight");
    
    $(`#${table_div_name}`).empty();

    var content = `
    <table id='${table_id}'>
        <thead>
            <tr>
                <th>Source</th>
                <th>Destination</th>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Price</th>
                <th>Choose Hotel</th>
            </tr>
        </thead>
    </table>
    `
    $(`#${table_div_name}`).append(content);

    var $tableBody = $(`#${table_id}`);
    for (var i = 0 + prefix; i < hotels.length + prefix; i++) {
        var hotel = hotels[i-prefix];
        console.log(hotel)
        if (tripType === 'oneWay'){
            var source = localStorage.getItem('origin');
            var destination = localStorage.getItem('destination');
            var departuredate = localStorage.getItem('onwardDepartureDate');
            var departuretime = hotel.getElementsByTagName("departuretime")[0].textContent;
            var arrivaldate = localStorage.getItem('onwardArrivalDate');
            var arrivaltime = hotel.getElementsByTagName("arrivaltime")[0].textContent;
        }
        else {
            var source = localStorage.getItem('destination');
            var destination = localStorage.getItem('origin');
            var departuredate = localStorage.getItem('returnDepartureDateInput');
            var departuretime = hotel.getElementsByTagName("departuretime")[0].textContent;
            var arrivaldate = localStorage.getItem('returnArrivalDateInput');
            var arrivaltime = hotel.getElementsByTagName("arrivaltime")[0].textContent;
        }

        var price = hotel.getElementsByTagName("price")[0].textContent;
  
      var $row = $(`<tr id="hotel${i}">`).append(
        $("<td>").text(source),
        $("<td>").text(destination),
        $("<td>").text(departuredate),
        $("<td>").text(departuretime),
        $("<td>").text(arrivaldate),
        $("<td>").text(arrivaltime),
        $("<td>").text(price)
      );
      const $radioItem = $(`<input type="checkbox" name="hotel" id="${i}">`);
      $row.append($('<td>').append($radioItem));
      $tableBody.append($row);
  
      document.getElementById(`${i}`).addEventListener('click', function() {
        if (tripType === 'oneWay'){
            handleRadioSelectionOnwardTrip(this.id); // Pass the unique row ID as an argument
            toggleOpacity(this.id);
        } else {
            handleRadioSelectionReturnTrip(this.id); // Pass the unique row ID as an argument
            toggleOpacity(this.id);
        }
        console.log("Added event listener to " + thid.id);
        
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

function handleRadioSelectionOnwardTrip(rowId) {
  const row = document.getElementById("hotel"+rowId);
  var selected_onward_flight = {
    "origin": row.cells[0].textContent, 
    "destination": row.cells[1].textContent, 
    "departuredate":row.cells[2].textContent,
    "departuretime": row.cells[3].textContent,
    "arrivaldate": row.cells[4].textContent,
    "arrivaltime": row.cells[5].textContent,
    "price": row.cells[6].textContent
  };

  localStorage.setItem("selected_onward_flight", JSON.stringify(selected_onward_flight));
};

function handleRadioSelectionReturnTrip(rowId) {
    const row = document.getElementById("hotel"+rowId);
    var selected_return_flight = {
      "origin": row.cells[0].textContent, 
      "destination": row.cells[1].textContent, 
      "departuredate":row.cells[2].textContent,
      "departuretime": row.cells[3].textContent,
      "arrivaldate": row.cells[4].textContent,
      "arrivaltime": row.cells[5].textContent,
      "price": row.cells[6].textContent
    };
  
    localStorage.setItem("selected_return_flight", JSON.stringify(selected_return_flight));
  };

function handleCartButton(){

  var tripType = localStorage.getItem('tripType');

  var selected_onward_flight = JSON.parse(localStorage.getItem('selected_onward_flight'));
  var selected_return_flight = JSON.parse(localStorage.getItem('selected_return_flight'));

  var cart = JSON.parse(localStorage.getItem('cart'));
  
  if (cart == null){
    if (tripType == 'roundTrip'){
        cart = {
          'selected_onward_flight': selected_onward_flight,
          'selected_return_flight': selected_return_flight
        };
    } else {
      cart = {
        'selected_onward_flight': selected_onward_flight,
      };
    }
  } else{
    cart['selected_onward_flight'] = selected_onward_flight;
    if (tripType == 'roundTrip'){
        cart.selected_return_flight = selected_return_flight;
    } else {
      cart.selected_return_flight = null;
    }
  }
  alert("Adding to the cart!");
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
  var hotels = xmlDoc.getElementsByTagName("flight");
  $("#dummyTableDiv").empty();
  // Display hotel information in the table

  var content = `
  <table>
    <thead>
        <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Date</th>
            <th>Departure Time</th>
            <th>Arrival Date</th>
            <th>Arrival Time</th>
            <th>Price</th>
        </tr>
    </thead>
    </table>`;

  $('#dummyTableDiv').append(content);

  var $tableBody = $("#dummyTableDiv");
  
  for (var i = 0; i < hotels.length; i++) {

    var hotel = hotels[i];

    var source = hotel.getElementsByTagName("origin")[0].textContent;
    var destination = hotel.getElementsByTagName("destination")[0].textContent;
    var departuredate = hotel.getElementsByTagName("departuredate")[0].textContent;
    var departuretime = hotel.getElementsByTagName("departuretime")[0].textContent;
    var arrivaldate = hotel.getElementsByTagName("arrivaldate")[0].textContent;
    var arrivaltime = hotel.getElementsByTagName("arrivaltime")[0].textContent;
    var price = hotel.getElementsByTagName("price")[0].textContent;

    var $row = $(`<tr>`).append(
      $("<td>").text(source),
      $("<td>").text(destination),
      $("<td>").text(departuredate),
      $("<td>").text(departuretime),
      $("<td>").text(arrivaldate),
      $("<td>").text(arrivaltime),
      $("<td>").text(price),
    );
    $tableBody.append($row);
  };
});