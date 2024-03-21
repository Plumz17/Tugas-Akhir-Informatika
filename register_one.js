function validasi()
{
    let txtFirstName = document.getElementById("firstname").value.trim();
    let txtLastName = document.getElementById("lastname").value.trim();
    let txtDOB = document.getElementById("dob").value.trim();
    let txtPhoneNumber = document.getElementById("phone").value.trim();
    if (txtFirstName.length < 3)
    {
        alert("First Name cannot be less than three characters");
        return false;
    }
    if (txtLastName.length < 3)
    {
        alert("Last Name cannot be less than 8 characters");
        return false;
    }   

    if(txtDOB.length == 0)
    {
        alert("Date of Birth cannot be blank");
        return false;
    }

    if (!/^\d+$/.test(txtPhoneNumber)) {
        alert("Phone Number must contain only numeric characters");
        return false;
    }

    localStorage.setItem("ls-firstname", txtFirstName);
    localStorage.setItem("ls-lastname", txtLastName);

    return true;
}