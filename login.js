//localStorage.clear()
var username = localStorage.getItem("username")
var password = localStorage.getItem("password")

let button = document.getElementById("submit");

var username1 = document.getElementById("username1");
var password1 = document.getElementById("password1");

button.addEventListener("click", () => {
    if (password1.value == password && username1.value == username) {
        alert(":) :) THANK YOU :) :)");
        window.location.href = "./index1.html";
    }
    else {
        alert("WRONG USERNAME OR PASSWORD :( ");
    }
})