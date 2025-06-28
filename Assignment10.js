//Q1
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "rgb(0,255,0)";
});

//2
const input = document.getElementById("nameInput");
const heading = document.getElementById("displayName");


input.addEventListener("input", function () {
    const filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
    input.value = filteredValue;
    console.log(input.value);
    heading.textContent = filteredValue;
});