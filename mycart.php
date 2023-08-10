<?php
session_start();
if (isset($_SESSION["passenger_id"])) {
    $mysqli = require __DIR__ . "/database.php";
    $sql = "SELECT * FROM users
            WHERE passenger_id = {$_SESSION["passenger_id"]}";
    $result = $mysqli->query($sql);
    $user = $result->fetch_assoc();
}
?>

<!DOCTYPE html>
<html>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>



<script>

// var flightItems = "";
// var hotelItems = "";
// var carItems = "";

function calculateTotalCartValue(){
  flightItems = JSON.parse(localStorage.getItem("flightItems"))
  hotelItems = JSON.parse(localStorage.getItem("hotelItems"))
  carItems = JSON.parse(localStorage.getItem("carItems"))
  var totalVal = 0;

  if (carItems != null) {
    totalVal += parseFloat(carItems.price);
  }
  if (hotelItems != null) {
    totalVal += parseFloat(hotelItems.price);
  }
  if (flightItems != null) {
    totalVal += parseFloat(flightItems.price);
  }

  const totalValElement = document.getElementById("totalCartValue");

  totalValElement.textContent = "Total cart value is: $"+ totalVal;
  
};

function placeOrder(){
  hotelItems = JSON.parse(localStorage.getItem("hotelItems"));
  if (hotelItems != null) {
    var hotel_id = hotelItems.hotel_id;
  var datatype = "HOTEL";
  $.ajax({
      type: "POST",
      url: "process_cart.php",
      data: {
          datatype: datatype,
          hotel_id: hotel_id
      },
      success: function(response) {
          localStorage.removeItem("hotelItems");
      }
  });
  location.reload();
}

carItems = JSON.parse(localStorage.getItem("carItems"));
  if (carItems != null) {
    var car_id = carItems.car_id;
  var datatype = "CAR";
  $.ajax({
      type: "POST",
      url: "process_cart.php",
      data: {
          datatype: datatype,
          car_id: car_id
      },
      success: function(response) {
          localStorage.removeItem("carItems");
      }
  });
  location.reload();
}


  flightItems = JSON.parse(localStorage.getItem("flightItems"));
  if (flightItems != null) {
    var flight_id = flightItems.flight_id;
  var datatype = "FLIGHT";
  $.ajax({
      type: "POST",
      url: "process_cart.php",
      data: {
          datatype: datatype,
          flight_id: flight_id
      },
      success: function(response) {
          localStorage.removeItem("flightItems");
      }
  });
  }
  
  location.reload();

}

</script>

<link rel="stylesheet" href="/css/mystyle.css">
<link rel="stylesheet" href="/css/hotels.css">
<script src="../js/common.js"></script>
<script src="../js/loadData.js"></script>
    <title>Hotels</title>
    <div class="headerClassGeneric centeredText hotelsHeader">
        <p>
            <span class="headerTitle">
                My Cart Details
            </span>
        </p>
    </div>
        
    <div class="NavBar fontSerif">
        <ul>
        <li><a href="index.php">Home</a></li>
            <li><a href='flights.php'>Flights</a></li>
            <li><a href="hotels.php">Hotels</a></li>
            <li><a href="cars.php">Rental Cars</a></li>
            <li ><a href="contact.html">Contact</a></li>
            <li class="liLastChild"><a href="orderstatus.php">Order Status</a></li>
            <li><a href="./specialoffers.html">Special Offers</a></li>
            <li><a href="#Cart">Cart</a><li>
        </ul>
    </div>

    <div class="centerSection footer-columns">
        <div class="centeredText centerSectionCol1">
            <?php if (isset($user)): ?>
                
                <h2>Hello, <?= htmlspecialchars($user["first_name"]) ?></h2>
                <br>

                <form action="logout.php" method="post">
                    <button type="submit" name="submit">Logout</button>
                </form>
                
            <?php else: ?>
                <h2><a href="login.php">Log in or Sign in</a></h2>
            <?php endif; ?>
        </div>

        <div class="centerSectionColumn2">
        <h3 id="totalCartValue"></h3>
      <table id="flightItems" border="1px solid black">
          <thead>
            <tr>
              <th>Flight Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      <br>

      <table id="hotelItems" border="1px solid black">
        <thead>
          <tr>
            <th>Hotel Details</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <br>

      <table id="carItems" border="1px solid black">
        <thead>
          <tr>
            <th>Car Details</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table><br>


      <button type="submit" id="placeOrder" onclick="placeOrder()" class="submit-button">
                        Place Order
                    </button>
        </div>
    </div>

<script src="../js/hotels.js"></script>
<script>

    function displayCars(items) {
    
    if (items != null) {
        var listItem = "<tr><td>";
        listItem += items.name + " - " + items.city;
        listItem += " (" + items.checkindate + " - " + items.checkoutdate + ") </td>";
        listItem += "<td>" + items.price;
        listItem += "</td></tr>";
    
        $("#carItems tbody").append(listItem);
        $("#carItems").show();
    } else {
        $("#carItems").hide();
    }
  }
  function displayHotels(items) {
  
  if (items != null) {
      var listItem = "<tr><td>";
      listItem += items.name + " - " + items.city;
      listItem += " (" + items.checkindate + " - " + items.checkoutdate + ") </td>";
      listItem += "<td>" + items.price;
      listItem += "</td></tr>";
  
      $("#hotelItems tbody").append(listItem);
      $("#hotelItems").show();
  } else {
      $("#hotelItems").hide();
  }
};

function displayFlights(items) {
  if (items != null) {
      var listItem = "<tr><td>";
      listItem += items.origin + " - " + items.destination;
      listItem += " (" + items.departure_date + " " + items.departure_time + "-" + items.arrival_date + " " + items.arrival_time + ") </td>";
      listItem += "<td>" + items.price;
      listItem += "</td></tr>";
  
      $("#flightItems tbody").append(listItem);
      $("#flightItems").show();
  } else {
      $("#flightItems").hide();
  }
};

  $(document).ready(function(){

    calculateTotalCartValue();

    displayHotels(JSON.parse(localStorage.getItem("hotelItems")));

    displayCars(JSON.parse(localStorage.getItem("carItems")));

    displayFlights(JSON.parse(localStorage.getItem("flightItems")));

});
</script>
<footer class="footer" >
<p>In partial fulfillment of <strong> CS6314 Web Programming Languages Summer 2023</strong> at The University of Texas at Dallas, Richardson, TX</p>
<p>By Shalini Gautam (SXG220033) and Srikar GSKP (SXS210570)</p>
</footer>

</html>
