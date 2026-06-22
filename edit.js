var namebox = document.getElementById("namebox")
var emailbox = document.getElementById("emailbox")
var passwordbox = document.getElementById("passwordbox")
var confirmbox = document.getElementById("confirmbox")

var editbtn = document.getElementById("editbtn")

var nameerror = document.getElementById("nameerror")
var emailerror = document.getElementById("emailerror")
var passworderror = document.getElementById("passworderror")
var confirmerror = document.getElementById("confirmerror")

var editmsg = document.getElementById("editmsg")

function goback()
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
        editbtn.disabled = false
        editbtn.classList.remove("opacity-50", "cursor-not-allowed")
    } else {
        editbtn.disabled = true
        editbtn.classList.add("opacity-50", "cursor-not-allowed")
    }
}

namebox.oninput = validate
emailbox.oninput = validate
passwordbox.oninput = validate
confirmbox.oninput = validate

editbtn.addEventListener("click", function () {

    validate()

    if (!editbtn.disabled) {
        editmsg.classList.remove("opacity-0")
        editmsg.classList.add("opacity-100")

        setTimeout(() => {
            editmsg.classList.add("opacity-0")
            editmsg.classList.remove("opacity-100")
            window.location.href = "settings.html"
        }, 2000)
    }
})
