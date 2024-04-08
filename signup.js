let button = document.getElementById("submit");

let username = document.getElementById("username");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
button.addEventListener("click", () => {
    if (password.value == password2.value) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        window.location.href = "./login.html";
    }
    else {
        alert("PASSWORD DOESN'T MATCH PLEASE CHECK YOUR PASSWORD :( ");
    }
})