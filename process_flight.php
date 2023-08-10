<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST["datatype"] == "FETCH") {
    $origin = $_POST["origin"];
    $destination = $_POST["destination"];
    $departure_date = $_POST["departure_date"];

    $mysqli = require __DIR__ . "/database.php";
    $sql = "select * FROM flights WHERE";
    $sql .= " origin = '".$origin."'";
    $sql .= " and destination = '".$destination."'";
    $sql .= " and departure_date = '".$departure_date."'";
    $sql .= " and flight_id not in (select flight_id from booking_flight);";

    $result = $mysqli->query($sql);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr onclick='rowClickHandlerNew(this)'>";
            $html_body .= "<td>".$row['flight_id']."</td>";
            $html_body .= "<td>".$row['origin']."</td>";
            $html_body .= "<td>".$row['destination']."</td>";
            $html_body .= "<td>".$row['departure_date']."</td>";
            $html_body .= "<td>".$row['departure_time']."</td>";
            $html_body .= "<td>".$row['arrival_date']."</td>";
            $html_body .= "<td>".$row['arrival_time']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    } else {
        $sql = "select * FROM flights WHERE";
        $sql .= " origin = '".$origin."'";
        $sql .= " and flight_id not in (select flight_id from booking_flight);";

        $result = $mysqli->query($sql);
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr onclick='rowClickHandlerNew(this)'>";
            $html_body .= "<td>".$row['flight_id']."</td>";
            $html_body .= "<td>".$row['origin']."</td>";
            $html_body .= "<td>".$row['destination']."</td>";
            $html_body .= "<td>".$row['departure_date']."</td>";
            $html_body .= "<td>".$row['departure_time']."</td>";
            $html_body .= "<td>".$row['arrival_date']."</td>";
            $html_body .= "<td>".$row['arrival_time']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    };
    
}
// elseif  ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST["datatype"] == "BOOK") {

//     $mysqli = require __DIR__ . "/database.php";
//     session_start();
//     $sql = "insert INTO booking_hotel (passenger_id, hotel_id, status) VALUES";
//     $sql .= "(".$_SESSION["passenger_id"].", ".$_POST["hotel_id"].", 'SUCCESS');";

//     $result = $mysqli->query($sql);
//     echo $sql;
// };
?>
