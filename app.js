function validateForm() {
    let fname = document.getElementById("fname").value.trim(); //Declares form variables
    let lname = document.getElementById("lname").value.trim();
    let phone = document.getElementById("phonenum").value.trim();
    let email = document.getElementById("email").value.trim();
     let cv = document.getElementById("cvupload").files.length;

    if (fname === "" || lname === "" || phone === "" || email === "") //Sets validation to ensure fields are not empty and prevents submission if not validated
      {
        alert("Please fill in all fields before submitting the form.");
        return false; //Stops incomplete submissons
    }
        if (cv === 0) {  // Ensures file is not left blank
        alert("Please upload your CV before submitting.");
        return false;
    }

    alert("Form submitted!");
    return true; // Allows validated submission and displays message
}
