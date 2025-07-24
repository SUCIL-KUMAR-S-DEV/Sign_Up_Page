let a=false;
function get(){
    
    if(a){
        var fnameData = document.getElementById("First_Name").value;
        var lnameData = document.getElementById("Last_Name").value;
        var emailData = document.getElementById("Email_Id").value;
        var passwordData = document.getElementById("Password").value;
        var dobData = document.getElementById("DOB").value;
        localStorage.setItem("First_name",fnameData);
        localStorage.setItem("Last_name",lnameData);
        localStorage.setItem("Email_Id",emailData);
        localStorage.setItem("Password",passwordData);
        localStorage.setItem("DOB",dobData);
    }
    else{
        alert("Click on the Icon to check password.");
        
    }
}


const errorDiv = document.getElementById("error");
var confirmPassword = document.getElementById("cnf_Password");
var dob = document.getElementById("DOB");
var passwordData = document.getElementById("Password");
function checkpass() {
    if (passwordData.value !== confirmPassword.value) {
        errorDiv.textContent = "❌ Passwords do not match!";
        a=false;
    } else {
        errorDiv.textContent = ""; // clear error
        a=true;
    }
}