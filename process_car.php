<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST["datatype"] == "FETCH") {
    $city = $_POST["city"];
    $check_in_date = $_POST["check_in_date"];
    $check_out_date = $_POST["check_out_date"];

    $mysqli = require __DIR__ . "/database.php";
    $sql = "select * FROM cars WHERE";
    $sql .= " city = '".$city."'";
    $sql .= " and check_in_date = '".$check_in_date."'";
    $sql .= " and check_out_date = '".$check_out_date."'";
    $sql .= " and car_id not in (select car_id from booking_car);";

    $result = $mysqli->query($sql);
    $rowCount = $result->num_rows;

    if ($rowCount > 0) {
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr onclick='rowClickHandlerNew(this)'>";
            $html_body .= "<td>".$row['car_id']."</td>";
            $html_body .= "<td>".$row['city']."</td>";
            $html_body .= "<td>".$row['car_name']."</td>";
            $html_body .= "<td>".$row['check_in_date']."</td>";
            $html_body .= "<td>".$row['check_out_date']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    } else {
        $sql = "select * FROM cars WHERE";
        $sql .= " city = '".$city."'";
        $sql .= " and car_id not in (select car_id from booking_car);";

        $result = $mysqli->query($sql);
        $html_body = "";
        while($row = $result->fetch_assoc()){
            $html_body .= "<tr onclick='rowClickHandlerNew(this)'>";
            $html_body .= "<td>".$row['car_id']."</td>";
            $html_body .= "<td>".$row['city']."</td>";
            $html_body .= "<td>".$row['car_name']."</td>";
            $html_body .= "<td>".$row['check_in_date']."</td>";
            $html_body .= "<td>".$row['check_out_date']."</td>";
            $html_body .= "<td>".$row['price']."</td>";
            $html_body .=   "</tr>";
        }
        echo $html_body;
    };
    
}
// elseif  ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST["datatype"] == "BOOK") {

//     $mysqli = require __DIR__ . "/database.php";
//     session_start();
//     $sql = "insert INTO booking_car (passenger_id, hotel_id, status) VALUES";
//     $sql .= "(".$_SESSION["passenger_id"].", ".$_POST["car_id"].", 'SUCCESS');";

//     $result = $mysqli->query($sql);
//     echo $sql;
// };
?>
