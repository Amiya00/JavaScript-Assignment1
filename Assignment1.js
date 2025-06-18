//q1
let num = 100;
if (num%10==0) {
    console.log("Good");
} else {
    console.log("Bad");
}

//2
let name = prompt("Enter your name ");
let age = prompt("Enter your age ");
// console.log(`${name} is ${age} years old`);
alert(`${name} is ${age} years old.`);

//3
let Quarter = 1;
switch (Quarter) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
        
    default:
        console.log("NOT A QUARTER!");
        break;
}

//4
let str = "Africa";
if ((str[0]=='A' || str[0]=='a') && str.length>5) {
    console.log("Goldent String");
} else {
    console.log("Not a golden string");
}

//5
let a = 3 , b = 6 , c = 2;
if (a>b && a>c) {
    console.log("a is greater");
}
else if (b>a && b>c){
    console.log("b is greater");
}
else {
    console.log("c is greater");
}

//6
let x = 32 , y = 47852;
if (x%10==y%10) {
    console.log("This two numbers have the same last digit.");
} else {
    console.log("This two numbers have not the same last digit.");
}