//Q1
let arr = [1,2,3,4,5];
let square = arr.map(function (el) {
    return el*el;
});
let sum = square.reduce((sum,cur) => (sum+cur));
let avg = sum/arr.length;
console.log(avg);

//2
let num = [1,3,5,7,9];
let plus5 = num.map((el) => el+5);
console.log(plus5);

//3
let str = ["Apna", "College", "Bob", "jhon", "Clerk"];
let strNew = str.map((i) => i.toUpperCase());
console.log(strNew);

//4
const doubleAndReturnArgs = (arr1, ...args) => [
    ...arr1,
    ...args.map((v)=>v*2)
];
console.log(doubleAndReturnArgs([1,2,3],4,4));
console.log(doubleAndReturnArgs([2],10,4));

//5
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));