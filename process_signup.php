<?php

// if (empty($_POST["passenger_id2"])) {
//     die("Mobile ID is needed");
// }

// if (strlen($_POST["passenger_id2"]) != 10) {
//     die("Mobile ID must be 10 characters");
// }

// if (empty($_POST["first_name"])) {
//     die("First name is required");
// }

// if (empty($_POST["last_name"])) {
//     die("Last name is required");
// }

// if (empty($_POST["age"])) {
//     die("Age is required");
// }

// if ( ! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
//     die("Valid email is required");
// }

if (strlen($_POST["password2"]) < 8) {
    die("Password must be at least 8 characters");
}

if ($_POST["password2"] !== $_POST["password_confirmation"]) {
    die("Passwords must match");
}

$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO users (passenger_id, first_name, last_name, age, email, password)
        VALUES (?, ?, ?, ?, ?, ?)";
        
$stmt = $mysqli->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $mysqli->error);
}

$stmt->bind_param("ississ",
                  $_POST["passenger_id2"],
                  $_POST["first_name"],
                  $_POST["last_name"],
                  $_POST["age"],
                  $_POST["email"],
                  $_POST["password2"]);
                  
if ($stmt->execute()) {

    header("Location: signup_success.html");
    exit;
    
} else {
    
    if ($mysqli->errno === 1062) {
        die("email already taken");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }
}