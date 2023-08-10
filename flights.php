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
<style>
    /* Add this style to your existing CSS or a separate CSS file */
    tr:hover {
        background-color: #FFC0CB; /* Change to your desired highlight color */
        cursor: pointer;
    }
</style>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    function showFlightsOnScreen(val) {
    $("#hotel_table").css("display", "block");
    $("#hotel_table_body").empty();
    
    var origin = $("#origin").val();
    var destination = $("#destination").val();
    var departure_date = $("#onwardDepartureDate").val();
    var datatype = "FETCH";

    $.ajax({
        type: "POST",
        url: "/process_flight.php",
        data: {
            datatype: datatype,
            origin: origin,
            destination: destination,
            departure_date: departure_date
        },
        success: function(response) {
            $("#hotel_table_body").append(response);
        },
        error: function(response) {
            alert("There is an error!");
        }
    });
}

function rowClickHandlerNew(row) {
    // Get the data from the row (for example, the text of the first cell)
    var rowDetails = $(row);
    var itemInfo = {
        flight_id : rowDetails.find("td:eq(0)").text(),
        origin: rowDetails.find("td:eq(1)").text(),
        destination: rowDetails.find("td:eq(2)").text(),
        departure_date: rowDetails.find("td:eq(3)").text(),
        departure_time: rowDetails.find("td:eq(4)").text(),
        arrival_date: rowDetails.find("td:eq(5)").text(),
        arrival_time: rowDetails.find("td:eq(6)").text(),
        price: rowDetails.find("td:eq(7)").text(),
      };
    localStorage.setItem("flightItems", JSON.stringify(itemInfo));
    showPopup("Flight has been added to the cart!", 5000);
}

function showPopup(message, duration) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");

    popupMessage.textContent = message;
    popup.style.display = "block";

    setTimeout(function() {
        popup.style.display = "none";
    }, duration);
}


</script>

<link rel="stylesheet" href="/css/mystyle.css">
<link rel="stylesheet" href="/css/hotels.css">
<script src="../js/common.js"></script>
<script src="../js/flights.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Hotels</title>
    <div class="headerClassGeneric centeredText hotelsHeader">
        <p>
            <span class="headerTitle">
                Book Flights
            </span>
        </p>
    </div>
        
    <div class="NavBar fontSerif">
        <ul>
        <li><a href="index.php">Home</a></li>
            <li><a class="active"  href="#Flights">Flights</a></li>
            <li><a href='hotels.php'>Hotels</a></li>
            <li><a href="cars.php">Rental Cars</a></li>
            <li ><a href="contact.html">Contact</a></li>
            <li class="liLastChild"><a href="orderstatus.php">Order Status</a></li>
            <li><a href="./specialoffers.html">Special Offers</a></li>
            <li><a href="/mycart.php">Cart</a><li>
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
            <div class="formFontStyle foreground">
                <h2>Choose Flights</h2>
                <label for="tripType" class="formBoldFontWeight">Select trip type:</label>
                <select id="tripType" onchange="showReturnDateInput()" class="inputFieldStyle">
                    <option value="oneWay">One Way</option>
                    <option value="roundTrip">Round Trip</option>
                </select>

                <label for="origin" class="formBoldFontWeight">Origin:</label>
                <input type="text" id="origin" class="inputFieldStyle">

                <label for="destination" class="formBoldFontWeight">Destination:</label>
                <input type="text" id="destination" class="inputFieldStyle">

                <label for="onwardDepartureDate" class="formBoldFontWeight">Onward Trip Departure Date:</label>
                <input type="date" id="onwardDepartureDate" class="inputFieldStyle">

                <label id="returnDepartureDateLabel " for="returnDepartureDate" class="formBoldFontWeight roundTrip" style="display: none;">Return Trip Departure Date:</label>
                <input type="date" id="returnDepartureDateInput" class="inputFieldStyle roundTrip" style="display: none;">

                <button id="bookButton" onclick="showFlightsOnScreen(this)" class="submit-button">
                        Show Flights
                </button>
            </div>
            <div id="popup" class="popup">
            <span id="popupMessage"></span>
        </div><br>
            <table id="hotel_table" class="container" style="display:none">
        <thead>
            <tr>
                <th><h4>Flight ID</h4></th>
                <th><h4>Origin</h4></th>
                <th><h4>Destination</h4></th>
                <th><h4>Departure Date</h4></th>
                <th><h4>Departure Time</h4></th>
                <th><h4>Arrival Date</h4></th>
                <th><h4>Arrival Time</h4></th>
                <th><h4>Price</h4></th>
            </tr>
        </thead>
        <tbody id="hotel_table_body">
        </tbody>
            </table>
        </div>

        <div id="results"></div>
    </div>

<script src="../js/hotels.js"></script>
<footer class="footer" >
<p>In partial fulfillment of <strong> CS6314 Web Programming Languages Summer 2023</strong> at The University of Texas at Dallas, Richardson, TX</p>
<p>By Shalini Gautam (SXG220033) and Srikar GSKP (SXS210570)</p>
</footer>

</html>
