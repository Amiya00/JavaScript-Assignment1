//Q1
let array = [8,49,2,56,3,81,5];
const arrayAverage = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return(sum/array.length);
}
console.log(arrayAverage(array));

//2
let num = prompt("Enter a number");
const isEven = (num) => {
    if (num%2 == 0) {
        console.log("even");
    } else {
        console.log("not");
    }
}
console.log(isEven(num));

//3
const object1 = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this.message);
    }
};
setTimeout(() => object1.logMessage(), 1000);

//4
let length = 4;
function callback() {
    console.log(this.length);
}
const object2 = {
    length:5,
    method(callback){
        callback();
    },
};
object2.method(callback,1,2);