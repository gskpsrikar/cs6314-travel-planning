<?php
session_start();
if ($_POST["datatype"] == "FLIGHT") {
    $passenger_id = $_SESSION["passenger_id"];

    $mysqli = require __DIR__ . "/database.php";

    $sql = "SELECT book_id,	origin, destination,departure_date,	departure_time,	arrival_date,arrival_time, price, status ";
    $sql .= " from booking_flight bf, flights f";
    $sql .= " where bf.flight_id = f.flight_id and";
    $sql .= " passenger_id =    ".$passenger_id.";";

    $result = $mysqli->query($sql);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr>";
            $html_body .= "<td>".$row['book_id']."</td>";
            $html_body .= "<td>".$row['origin']."</td>";
            $html_body .= "<td>".$row['destination']."</td>";
            $html_body .= "<td>".$row['departure_date']." ".$row['departure_time']."</td>";
            $html_body .= "<td>".$row['arrival_date']." ".$row['arrival_time']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .= "<td>".$row['status']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    } 
}else if($_POST["datatype"] == "HOTEL"){
        $passenger_id = $_SESSION["passenger_id"];

    $mysqli = require __DIR__ . "/database.php";

    $sql = "SELECT book_id,	city, hotel_name, check_in_date, check_out_date, price, status ";
    $sql .= " from booking_hotel bh, hotels h where bh.hotel_id = h.hotel_id and";
    $sql .= " passenger_id =    ".$passenger_id.";";

    $result = $mysqli->query($sql);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr>";
            $html_body .= "<td>".$row['book_id']."</td>";
            $html_body .= "<td>".$row['city']."</td>";
            $html_body .= "<td>".$row['hotel_name']."</td>";
            $html_body .= "<td>".$row['check_in_date']."</td>";
            $html_body .= "<td>".$row['check_out_date']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .= "<td>".$row['status']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    }
 } else {
        $passenger_id = $_SESSION["passenger_id"];

    $mysqli = require __DIR__ . "/database.php";

    $sql = "SELECT book_id,	city, car_name, check_in_date, check_out_date, price, status ";
    $sql .= " from booking_car bh, cars h where bh.car_id = h.car_id and";
    $sql .= " passenger_id =    ".$passenger_id.";";

    $result = $mysqli->query($sql);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr>";
            $html_body .= "<td>".$row['book_id']."</td>";
            $html_body .= "<td>".$row['city']."</td>";
            $html_body .= "<td>".$row['car_name']."</td>";
            $html_body .= "<td>".$row['check_in_date']."</td>";
            $html_body .= "<td>".$row['check_out_date']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .= "<td>".$row['status']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    }
    
}
?>
