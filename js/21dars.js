"use strict";

// const options = {
//     name: "Halodilnik",
//     color: "oq",
//     ogirligi: "100kg",
//     razmer: {
//         boyi: 10,
//         eni: 20
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {boyi, eni} = options.razmer;
// console.log(boyi);

// console.log(options.name.toUpperCase);
// console.log(Object.keys(options).length);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Obyekt nomi ${i} va uning turi ${options[key][i]}`);            
//         }
//     } else {
//         console.log(`Obyekt nomi ${key} va uning turi ${options[key]}`);        
//     }
// }
const arr = [
    1,
    2,
    3,
    4,
    6,
    9
];

// arr.pop(); // massivning oxiri - oxirgi massivni ochiradi
// arr.push(10); // massiv qoshish oxiriga

// console.log(arr);

// for ( let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }

// for ( let value of arr) {
//     console.log(value);
// }

arr.forEach(function(sonlar, i, arr) {
   console.log(`${i}: ${sonlar} massivning ichida ${arr}`);
 })


const str = prompt("", "");
const products = str.split(", ");
products.sort(compareNum);
console.log(products.join('; '));

function compareNum (a, b) {
    return a - b;
}