

function openLoginForm() {
    document.getElementById("loginFormId").style.display = "block";

}

function closeForm() {
    document.getElementById("loginFormId").style.display = "none";
}


function openRegisterForm() {
    document.getElementById("registrationFormId").style.display = "block";

}

function closeRegisterForm() {
    document.getElementById("registrationFormId").style.display = "none";
}

///////////////////////////navbar///////////////////////////////////
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
