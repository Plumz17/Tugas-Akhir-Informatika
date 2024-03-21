function validasi() {
    let txtEmail = document.getElementById("email").value.trim();
    let txtPassword = document.getElementById("password").value;
    let txtConfirmPassword = document.getElementById("confirmPassword").value;

    if (txtEmail == "") {
        alert("Email cannot be empty");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(txtEmail)) {
        alert("Invalid email format");
        return false;
    }
    
    if (txtPassword.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    if (txtPassword !== txtConfirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}
