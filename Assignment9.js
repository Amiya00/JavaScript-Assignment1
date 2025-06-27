//Q1
let input1 = document.createElement("input");
let btn1 = document.createElement("button");
btn1.innerText = "Click Me!";

document.querySelector("body").append(input1);
document.querySelector("body").append(btn1);

//2
btn1.setAttribute("id","btn");
input1.setAttribute("placeholder","username");

//3

btn1.classList.add("style");

//4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

h1.classList.add("purpule");
// h1.classList.add("underlined");

//5
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);