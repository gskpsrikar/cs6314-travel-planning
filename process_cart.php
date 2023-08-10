<?php
        $mysqli = require __DIR__ . "/database.php";
        session_start();
        if($_POST["datatype"] == "HOTEL"){
            $sql = "insert INTO booking_hotel (passenger_id, hotel_id, status) VALUES";
            $sql .= "(".$_SESSION["passenger_id"].", ".$_POST["hotel_id"].", 'SUCCESS');";
            $result = $mysqli->query($sql);
            echo $sql;
        }
        if($_POST["datatype"] == "CAR"){
            $sql = "insert INTO booking_car (passenger_id, car_id, status) VALUES";
            $sql .= "(".$_SESSION["passenger_id"].", ".$_POST["car_id"].", 'SUCCESS');";
        
            $result = $mysqli->query($sql);
            echo $sql;
        }
        if ($_POST["datatype"] == "FLIGHT"){
            $sql = "insert INTO booking_flight (passenger_id, flight_id, status) VALUES";
            $sql .= "(".$_SESSION["passenger_id"].", ".$_POST["flight_id"].", 'SUCCESS');";
        
            $result = $mysqli->query($sql);
            echo $sql;
        }
    ?>