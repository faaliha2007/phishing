var namebox = document.getElementById("namebox")
var emailbox = document.getElementById("emailbox")
var passwordbox = document.getElementById("passwordbox")
var confirmbox = document.getElementById("confirmbox")

var signinbtn = document.getElementById("signinbtn")

var nameerror = document.getElementById("nameerror")
var emailerror = document.getElementById("emailerror")
var passworderror = document.getElementById("passworderror")
var confirmerror = document.getElementById("confirmerror")
var editbtn = document.getElementById("editbtn")
var msg = document.getElementById("msg")
var editmsg = document.getElementById("editmsg")
var riskmsg = document.getElementById("riskmsg")
var blkbtn = document.getElementById("blkbtn")

function gosignin()
{
    window.location.href = "signin.html"
}

function gologin()
{
    window.location.href = "login.html"
}

function gorisky()
{
    window.location.href = "risky.html"
}

function cross()
{
    history.back()
}

function validate() {

    let valid = true

    if (namebox.value.trim() === "") {
        nameerror.classList.remove("hidden")
        valid = false
    } else {
        nameerror.classList.add("hidden")
    }

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailpattern.test(emailbox.value)) {
        emailerror.classList.remove("hidden")
        valid = false
    } else {
        emailerror.classList.add("hidden")
    }

    if (passwordbox.value.length < 6) {
        passworderror.classList.remove("hidden")
        valid = false
    } else {
        passworderror.classList.add("hidden")
    }

    if (confirmbox.value !== passwordbox.value) {
        confirmerror.classList.remove("hidden")
        valid = false
    } else {
        confirmerror.classList.add("hidden")
    }

    if (valid) {
        if(signinbtn){
        signinbtn.disabled = false
        signinbtn.classList.remove("opacity-50", "cursor-not-allowed")
        }
        if(editbtn)
        {
              editbtn.disabled = false
        editbtn.classList.remove("opacity-50", "cursor-not-allowed")
        }
       

    } else {
        if(signinbtn){
        signinbtn.disabled = true
        signinbtn.classList.add("opacity-50", "cursor-not-allowed")
        }
        if(editbtn){
        editbtn.disabled = true
        editbtn.classList.add("opacity-50", "cursor-not-allowed")  
        }
       
    }
}

namebox.oninput = validate
emailbox.oninput = validate
passwordbox.oninput = validate
confirmbox.oninput = validate

signinbtn.addEventListener("click", function () {
    validate()

    if (!signinbtn.disabled) {
        msg.classList.remove("opacity-0")
        msg.classList.add("opacity-100")

        setTimeout(() => {
            msg.classList.add("opacity-0")
            msg.classList.remove("opacity-100")
        }, 2000)
    }
})

blkbtn.addEventListener("click", function () {

    riskmsg.classList.remove("opacity-0")
    riskmsg.classList.add("opacity-100")

    setTimeout(() => {
        riskmsg.classList.add("opacity-0")
        riskmsg.classList.remove("opacity-100")
    }, 2000)

})

editbtn.addEventListener("click", function () {
    validate()

    if (!editbtn.disabled) {
        editmsg.classList.remove("opacity-0")
        editmsg.classList.add("opacity-100")

        setTimeout(() => {
            editmsg.classList.add("opacity-0")
            editmsg.classList.remove("opacity-100")
        }, 2000)
    }
})

