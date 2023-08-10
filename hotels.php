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

<script>

function rowClickHandlerNew(row) {
    // Get the data from the row (for example, the text of the first cell)
    var hotelRow = $(row);
    var hotelInfo = {
        hotel_id : hotelRow.find("td:eq(0)").text(),
        city: hotelRow.find("td:eq(1)").text(),
        name: hotelRow.find("td:eq(2)").text(),
        checkindate: hotelRow.find("td:eq(3)").text(),
        checkoutdate: hotelRow.find("td:eq(4)").text(),
        price: hotelRow.find("td:eq(5)").text(),
      };

    localStorage.setItem("hotelItems", JSON.stringify(hotelInfo));
    showPopup("Hotel has been added to the cart!", 5000);
    
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
<script src="../js/loadData.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Hotels</title>
    <div class="headerClassGeneric centeredText hotelsHeader">
        <p>
            <span class="headerTitle">
                Book Hotels
            </span>
        </p>
    </div>
        
    <div class="NavBar fontSerif">
        <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href='flights.php'>Flights</a></li>
            <li><a class="active"  href="#Hotels">Hotels</a></li>
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
                <h2>Choose hotels</h2>
                <form id="myForm" action="process_hotel.php" method='get'>
                    <label for="city" class="formBoldFontWeight">City:</label>
                    <input type="text" id="city" name="city" class="inputFieldStyle">

                    <label for="checkInDate" class="formBoldFontWeight">Check-in Date:</label>
                    <input type="date" id="checkInDate" name="checkInDate" class="inputFieldStyle">

                    <label for="checkOutDate" class="formBoldFontWeight">Check-out Date:</label>
                    <input type="date" id="checkOutDate" name="checkOutDate" class="inputFieldStyle">
                
                    <button type="submit" id="bookButton" onclick="validateDates()" class="submit-button">
                        Show Hotels
                    </button>
                </form>
            </div>
            <div id="popup" class="popup">
            <span id="popupMessage"></span>
        </div><br>
            <table id="hotel_table" class="container" style="display:none">
        <thead>
            <tr>
                <th><h4>Hotel ID</h4></th>
                <th><h4>City</h4></th>
                <th><h4>Hotel Name</h4></th>
                <th><h4>Checkin Date</h4></th>
                <th><h4>Checkout Date</h4></th>
                <th><h4>Price</h4></th>
            </tr>
        </thead>
        <tbody id="hotel_table_body">
        </tbody>
            </table>
        </div>
        <script>
            $(document).ready(function() {
                $("#myForm").submit(function(event) {
                    $("#hotel_table").css("display", "block");
                    $("#hotel_table_body").empty();
                    event.preventDefault();
                    var city = $("#city").val();
                    var check_in_date = $("#checkInDate").val();
                    var check_out_date = $("#checkOutDate").val();
                    var datatype = "FETCH";
                    $.ajax({
                        type: "POST",
                        url: "process_hotel.php",
                        data: {
                            datatype: datatype,
                            city: city,
                            check_in_date: check_in_date,
                            check_out_date: check_out_date
                        },
                        success: function(response) {
                            $("#hotel_table_body").append(response);
                        }
                        });
                    });
            });
            </script>

        <div id="results"></div>
    </div>

<script src="../js/hotels.js"></script>
<footer class="footer" >
<p>In partial fulfillment of <strong> CS6314 Web Programming Languages Summer 2023</strong> at The University of Texas at Dallas, Richardson, TX</p>
<p>By Shalini Gautam (SXG220033) and Srikar GSKP (SXS210570)</p>
</footer>
</html>
