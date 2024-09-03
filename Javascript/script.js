function validateForm() {
    let Fullname = document.getElementById("Fullname").value; 
    let Email = document.getElementById("Email").value;
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");

    nameError.innerHTML = " ";
    emailError.innerHTML = " ";

    let isValid = true;

    if (Fullname === " ") {
        nameError.innerHTML = "Fullname is required.";
        isValid = false;
    }

    if (Email === " ") {
        emailError.innerHTML = "Email is required.";
        isValid = false;
    }else {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!Email.match(emailPattern)) {
            emailError.innerHTML = "Invalid email format.";
            isValid = false;
        }
    }

    if (isValid) {
        console.log("Form submitted successfully.");
    }


}