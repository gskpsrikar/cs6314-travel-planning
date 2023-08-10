function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    const maleRadioButton = document.getElementById("male");
    const femaleRadioButton = document.getElementById("female");
    var email = document.getElementById("email").value.trim();
    var comment = document.getElementById("comment").value.trim();

    if (firstName === "" || lastName === "" || phoneNumber === "" || !gender || email === "" || comment === "") {
      alert("Please fill in all the required fields.");
      return false;
    }

    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      alert("First name and last name should be alphabetic only.");
      return false;
    }

    if (firstName.charAt(0) !== firstName.charAt(0).toUpperCase() || lastName.charAt(0) !== lastName.charAt(0).toUpperCase()) {
      alert("The first letter of the first name and last name should be capitalized.");
      return false;
    }

    if (firstName === lastName) {
      alert("First name and last name cannot be the same.");
      return false;
    }

    if (!/^\(\d{3}\)\s\d{3}-\d{4}$/.test(phoneNumber)) {
      alert("Phone number must be formatted as (ddd) ddd-dddd.");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email address must contain @ and .");
      return false;
    }

    if (comment.length < 10) {
      alert("Comment must be at least 10 characters long.");
      return false;
    }
    
    if (maleRadioButton.checked){
      gender_value = "male";
    } else {
      gender_value = "female";
    };
    
    var contact_details = {
      "firstname": firstName,
      "lastname": lastName,
      "gender": gender_value,
      "phone": phoneNumber,
      "email": email,
      "comment": comment
    };

    alert(`Built JSON : ${JSON.stringify(contact_details)}`);

    return true;
  };
