//Q1
let arr = [1,2,3,4,5,6,2,3];
console.log(arr);
let num = prompt("Enteer the number to be delete");
for (idx of arr) {
    if (arr[idx] == num) {
        arr.splice(idx,1);
    }
}
console.log(`After delete the number ${num}, the array will be ${arr}`);

//2
let count = 0;
for (idxx of "287152") {
    count++;
}
console.log(`The no. of digits in 287152 is ${count}`);

//3
let number = 287152;
let sum = 0;
let copy = number;
while(copy>0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

//4
let num2 = prompt("Enter the number to find out the factorial");
let factorial = 1;
for (let index = num2; index >= 1; index--) {
    factorial *= index;
}
console.log(`Factorial of ${num2} is ${factorial}`);

//5
let array = [3,5,1,9,7,2,8,4];
let bigNum = array[0];
for (let i = 1 ; i<=array.length ; i++) {
    if (bigNum < array[i]) {
        bigNum = array[i];
    }
}
console.log(`Bigest no. is ${bigNum}`);