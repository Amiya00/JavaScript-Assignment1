//Q1
let x = prompt("Enter the number 1 to 9");
const array = [4,7,1,3,8,9,2,5,6]
function num(array, x) {
    for (let index = 0; index < array.length; index++) {
        if (array[index]>x) {
            console.log(array[index]);
        }
    }
}
num(array,x);

//2
let str = "abcdabcdefgggh";
let ans = "";
let count = 0;
function unique(str,ans) {
    for (let index = 0; index < str.length; index++) {
        let currentChar = str[index];
        if (ans.indexOf(currentChar)==-1) {
            ans += currentChar;
        }
    }
    console.log(ans);
}
unique(str,ans);

//3
let country = ["Australia","Germany","United States of America"];
function LCName(country){
    let output = 0;
    for (let i = 0; i < country.length; i++) {
        let outputlen = country[output].length;
        let currlen = country[i].length;
        if (currlen>outputlen) {
            output = i;
        }
    }
    console.log(country[output]);
}
LCName(country);

//4
let string = prompt("Enter any string");
let c = 0;
function vowels(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u') {
           c++; 
        }
    }
    console.log(c);
    return c;
}
vowels(string);

//5
let start = 100;
let end = 200;
function randomNo(start,end){
    let diff = end - start;
    randomNo = Math.floor(Math.random() * diff) + start;
    console.log(randomNo);
    return randomNo;
}
randomNo(start,end);