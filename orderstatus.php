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
    $(document).ready(function(){
        var datatype = "FLIGHT";
        $.ajax({
                    type: "POST",
                        url: "process_order.php",
                        data: {
                            datatype: datatype
                        },
                        success: function(response) {
                            $("#flightOrderBody").append(response);
                        }
                        });
        datatype = "HOTEL";
        $.ajax({
                    type: "POST",
                        url: "process_order.php",
                        data: {
                            datatype: datatype
                        },
                        success: function(response) {
                            $("#hotelOrderBody").append(response);
                        }
                        });
        datatype = "CAR";
        $.ajax({
                    type: "POST",
                        url: "process_order.php",
                        data: {
                            datatype: datatype
                        },
                        success: function(response) {
                            $("#carOrderBody").append(response);
                        }
                        });
    });
    </script>
<link rel="stylesheet" href="/css/mystyle.css">
<link rel="stylesheet" href="/css/hotels.css">
<script src="../js/common.js"></script>
<script src="../js/loadData.js"></script>
    <title>Orders</title>
    <div class="headerClassGeneric centeredText hotelsHeader">
        <p>
            <span class="headerTitle">
                Order Status
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
            <li class="liLastChild"><a href="#OrderStatus">Order Status</a></li>
            <li><a href="./specialoffers.html">Special Offers</a></li>
            <li><a href="mycart.php">Cart</a><li>
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
    
      <h3> Flight Details </h3>
        <table id="flightOrder" border="1px solid black">
          <thead>
            <tr> 
           <th> Booking Id </th>
                <th> Origin </th>
                <th> Destination </th>
                <th> Departure Date </th>
                <th> Arrival Date </th>
                <th> Price </th>
                <th> Status </th>
            </tr>
          </thead>
          <tbody id = "flightOrderBody">
          </tbody>
            </table><br>

            <h3> Hotel Details </h3>

      <table id="hotelOrder" border="1px solid black">
        <thead>
          <tr>
          <th> Booking Id </th>
                <th>City </th>
                <th> Hotel Name </th>
                <th> Checkin Date </th>
                <th> Checkout Date </th>
                <th> Price </th>
                <th> Status </th>
          </tr>
        </thead>
        <tbody id = "hotelOrderBody">
        </tbody>
      </table><br>

      <h3> Car Details </h3>
      <table id="carOrder" border="1px solid black">
        <thead>
          <tr>
          <th> Booking Id </th>
                <th>City </th>
                <th> Car Name </th>
                <th> Checkin Date </th>
                <th> Checkout Date </th>
                <th> Price </th>
                <th> Status </th>
          </tr>
        </thead>
        <tbody id = "carOrderBody">
        </tbody>
      </table><br>

        </div>
    </div>

<script src="../js/hotels.js"></script>
<footer class="footer" >
<p>In partial fulfillment of <strong> CS6314 Web Programming Languages Summer 2023</strong> at The University of Texas at Dallas, Richardson, TX</p>
<p>By Shalini Gautam (SXG220033) and Srikar GSKP (SXS210570)</p>
</footer>

</html>
