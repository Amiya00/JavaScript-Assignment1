//Q1
let arr1 = ["7","9","0","-2"];
let n1 = 3;
console.log(arr1.slice(0,n1));

//2
let arr2 = ["7","9","0","-2"];
let n2 = 3;
console.log(arr2.slice(-n2));

//3
let str1 = prompt("Please enter a string: ");
if (str1.length == 0) {
    console.log("String is Blank");
} else {
    console.log("String is not Blank");
}

//4
let str2="ApNaCoLlEgE";
let idx = 3;
if (str2[idx] == str2[idx].toLowerCase()) {
    console.log("character is in lower case.");
} else {
    console.log("character is in upper case.");
}

//5
let msg = prompt("Please give me a message: ");
console.log(`Original msg is ${msg}`);
console.log(`After trim msg is ${msg.trim()}`);

//6
let arr3 = ['1','5','6','3','8','7','2','4','9'];
let n3 = 6;
let count = 0;
let index;
for (index = 0; index < arr3.length; index++) {
    if (arr3[index] == n3) {
        count++;
        break;
    }
}
if (count != 0) {
    console.log(`Element ${n3} is exists in the array at ${index+1} postion.`);
} else {
    console.log(`Element ${n3} is not exists in the array.`);
}
//OR
let item = 8;
if (arr3.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exists in array");
}