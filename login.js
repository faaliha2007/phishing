var namebox = document.getElementById("namebox")
var passwordbox = document.getElementById("passwordbox")

var loginbtn = document.getElementById("signinbtn") 

var nameerror = document.getElementById("nameerror")
var passworderror = document.getElementById("passworderror")

var msg = document.getElementById("msg")

function gosignin()
{
    window.location.href = "signin.html"
}

function validate() {

    let valid = true

    if (namebox.value.trim() === "") {
        nameerror.classList.remove("hidden")
        valid = false
    } else {
        nameerror.classList.add("hidden")
    }

    if (passwordbox.value.length < 6) {
        passworderror.classList.remove("hidden")
        valid = false
    } else {
        passworderror.classList.add("hidden")
    }

    if (valid) {
        loginbtn.disabled = false
        loginbtn.classList.remove("opacity-50", "cursor-not-allowed")
    } else {
        loginbtn.disabled = true
        loginbtn.classList.add("opacity-50", "cursor-not-allowed")
    }
}

namebox.oninput = validate
passwordbox.oninput = validate

loginbtn.addEventListener("click", function () {

    validate()

    if (!loginbtn.disabled) {
        msg.classList.remove("opacity-0")
        msg.classList.add("opacity-100")
      

        setTimeout(() => {
            msg.classList.add("opacity-0")
            msg.classList.remove("opacity-100")
            window.location.href = "notification.html"
        }, 2000)
    }
})
