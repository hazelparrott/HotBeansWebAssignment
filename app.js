function validateForm() {
    let fname = document.getElementById("fname").value.trim(); //Declares form variables
    let lname = document.getElementById("lname").value.trim();
    let phone = document.getElementById("phonenum").value.trim();
    let email = document.getElementById("email").value.trim();

    if (fname === "" || lname === "" || phone === "" || email === "") //Sets validation to ensure fields are not empty and prevents submission if not validated
      {
        alert("Please fill in all fields before submitting the form.");
        return false; //Stops incomplete submissons
    }

    alert("Form submitted!");
    return true; // Allows validated submission and displays message
}