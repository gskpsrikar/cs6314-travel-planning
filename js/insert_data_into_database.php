<?php

$host = "localhost";
$dbname = "travel";
$username = "root";
$password = "";

$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);

    $query = $_POST["query"];

    $result = $mysqli->query($query);
    echo $result;
?>;
