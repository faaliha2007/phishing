var namebox = document.getElementById("namebox");
var emailbox = document.getElementById("emailbox");
var passwordbox = document.getElementById("passwordbox");
var confirmbox = document.getElementById("confirmbox");

var signinbtn = document.getElementById("signinbtn");

var nameerror = document.getElementById("nameerror");
var emailerror = document.getElementById("emailerror");
var passworderror = document.getElementById("passworderror");
var confirmerror = document.getElementById("confirmerror");

var msg = document.getElementById("msg");


function validate() {
    let valid = true;

    if (namebox.value.trim() === "") {
        nameerror.classList.remove("hidden");
        valid = false;
    } else {
        nameerror.classList.add("hidden");
    }

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(emailbox.value)) {
        emailerror.classList.remove("hidden");
        valid = false;
    } else {
        emailerror.classList.add("hidden");
    }

    if (passwordbox.value.length < 6) {
        passworderror.classList.remove("hidden");
        valid = false;
    } else {
        passworderror.classList.add("hidden");
    }

    if (confirmbox.value !== passwordbox.value) {
        confirmerror.classList.remove("hidden");
        valid = false;
    } else {
        confirmerror.classList.add("hidden");
    }

    // enable/disable button
    if (valid) {
        signinbtn.disabled = false;
        signinbtn.classList.remove("opacity-50", "cursor-not-allowed");
    } else {
        signinbtn.disabled = true;
        signinbtn.classList.add("opacity-50", "cursor-not-allowed");
    }

    return valid; 
}


namebox.oninput = validate;
emailbox.oninput = validate;
passwordbox.oninput = validate;
confirmbox.oninput = validate;


signinbtn.addEventListener("click", function () {

    if (validate()) {

        msg.classList.remove("opacity-0");
        msg.classList.add("opacity-100");

        setTimeout(() => {
            msg.classList.add("opacity-0");
            msg.classList.remove("opacity-100");

           
            window.location.href = "notification.html";

        }, 2000);
    }
});
