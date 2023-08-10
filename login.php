<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = sprintf("SELECT * FROM users
                    WHERE passenger_id = '%d'",
                   $mysqli->real_escape_string($_POST["passenger_id"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {
        
        if ($_POST["password"] === $user["password"]) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["passenger_id"] = $user["passenger_id"];
            
            header("Location: index.php");
            exit;
        }
    }
    
    $is_invalid = true;
}
?>

<!DOCTYPE html>
<html>
    <div style="display:flex;">

        <div style="width:40%; border-right:2px solid #000;">
            <head>
                <title>Login</title>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
            </head>
            <script>
               function validateForm() {
    var firstName = document.getElementById("first_name").value.trim();
    var lastName = document.getElementById("last_name").value.trim();
    var phoneNumber = document.getElementById("passenger_id2").value.trim();
    var age = document.getElementById("age").value.trim();
    var email = document.getElementById("email").value.trim();

    // if (firstName == "" || lastName === "" || phoneNumber === "" || email === "" || age === "") {
    //   alert("Please fill in all the required fields.");
    //   return false;
    // }
    if (phoneNumber.length !=10) {
      alert("Phone number must be of 10 digits");
      return false;
    }


    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      alert("Please enter valid names");
      return false;
    }

    if (firstName === lastName) {
      alert("First name and last name cannot be the same.");
      return false;
    }

    if (age == "" | parseInt(age)<0 ) {
      alert("Please enter valid age.");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email address must contain @ and .");
      return false;
    }

    if (!email.includes("@") || !email.includes(".edu")) {
      alert("Email address must contain @ and .edu");
      return false;
    }

    return true;
  };

                </script>
            <body>
                <h1>Login</h1>
                <?php if ($is_invalid): ?>
                    <em>Invalid login</em>
                <?php endif; ?>
                <form method="post">
                    <label for="passenger_id">Passenger ID</label>
                    <input type="text" name="passenger_id" id="passenger_id"
                        value="<?= htmlspecialchars($_POST["passenger_id"] ?? "") ?>">
                    
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password">
                    <button>Log in</button>
                </form>
            </body>
        </div>

        <div style="padding-left: 10%;">
            <head>
                <title>Signup</title>
                <meta charset="UTF-8">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
                <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js" defer></script>
                <script src="/js/validation.js" defer></script>
            </head>

            <body>
                <h1>Sign Up</h1>
            
                <form action="process_signup.php" method="post" onsubmit = "return validateForm()" id="signup" novalidate>
                    <div>
                        <label for="passenger_id">Mobile (Passenger ID): </label>
                        <input type="text" id="passenger_id2" name="passenger_id2" placeholder="xxx-xx-xxxxx">
                    </div>
                    <div style="display: flex;">
                        <div>
                            <label for="first_name">First Name</label>
                            <input type="text" id="first_name" name="first_name">
                        </div>
                        <div>
                            <label for="last_name">Last Name</label>
                            <input type="text" id="last_name" name="last_name">
                        </div>
                    </div>
                    <div>
                        <label for="age">Age</label>
                        <input type="text" id="age" name="age">
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div style="display: flex;">
                        <div>
                            <label for="password2">Password</label>
                            <input type="password" id="password2" name="password2">
                        </div>
                        <div>
                            <label for="password_confirmation">Repeat password</label>
                            <input type="password" id="password_confirmation" name="password_confirmation">
                        </div>
                    </div>
                    <button id = "submitButton">Sign up</button>
                </form>
            </body>
        
        </div>
    </div>
</html>