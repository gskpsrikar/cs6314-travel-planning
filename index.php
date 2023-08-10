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
<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/mystyle.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <title>Home Page</title>

    <div class="headerClassGeneric centeredText" style="display: block; font-family: Helvetica;">
    <h1>Travel App</h1>
    </div>
        
    <div class="NavBar fontSerif">
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href='flights.php'>Flights</a></li>
            <li><a href="hotels.php">Hotels</a></li>
            <li><a href="cars.php">Rental Cars</a></li>
            <li ><a href="contact.html">Contact</a></li>
            <li class="liLastChild"><a href="orderstatus.php">Order Status</a></li>
            <li><a href="./specialoffers.html">Special Offers</a></li>
            <li><a href="/mycart.php">Cart</a><li>
            
        </ul>
    </div>

    <div class="centerSection footer-columns">

        <div class="centeredText centerSectionCol2" style="display: block;">
        <?php if (isset($user)): ?>
            
            <h2>Hello, <?= htmlspecialchars($user["first_name"]) ?></h2>

            <form action="logout.php" method="post">
                <button type="submit" name="submit">Logout</button>
            </form>
            
        <?php else: ?>
            <h2><a href="login.php">Log in or Sign in</a></h2>
        <?php endif; ?>
        </div>

    </div>

    <footer class="footer">

        <div class="footer-columns">
          <div class="footerCol2" style="width=33vw;">
            <h3>Student Details</h3>
            1. Shalini Gautam (SXG220033) <br>
            2. Srikar GSKP (SXS210570) <br>
          </div>
          
          <script src="./js/loadData.js"></script>
          
          <div style="width=33vw;">
            <button type="submit" id="loadButton" onclick="loadFlightsData()" class="submit-button">Insert Flights</button>
            <button type="submit" id="loadButton" onclick="loadHotelData()" class="submit-button">Insert Hotels</button>
            <button type="submit" id="loadButton" onclick="loadCarsData()" class="submit-button">Insert Cars</button>
            </div>
          
          <div class="footerCol2 footerCol3" style="width=33vw;">
            <h3>Change background color</h3>
            <input type="color" id="colorPicker">
            <button id="applyBtn" onclick="changeColor()">Apply Color</button>
          </div>

        </div>
      </footer>

<script src="./js/common.js"></script>


</body>
</html>