"use strict";

const str = "hello";
const arr = [1, 2, 3];

console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str[2]);
console.log(arr.length);
console.log(arr[1]);
console.log(str[0]);

const straka = "Assalomu alaykum";

console.log(straka.indexOf("mu"));

const logg = "Va alaykum assalom";

console.log(logg.slice(4, 9));
console.log(logg.substring(4));
console.log(logg.substr(11, 4));

const num = 19.99;
console.log(Math.round(num));
console.log(Math.fround(num));