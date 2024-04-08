let search_bar = document.getElementById("search_bar");
let button = document.getElementsById("seabtn");
console.log(search_bar.value);
button.addEventListener("click", () => {
    console.log(search_bar.value);
});
