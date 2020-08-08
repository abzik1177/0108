"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // silka
copy.a = 10;

console.log(copy);
console.log(obj);

const numbers = {
    a: 4,
    b: 6,
    d: 7,
    e: 10,
    f: {
        f1: 19,
        f2:23
    },
};

const add ={
    a1: -3,
    c1: -9,
    b1: -7,
};

const clone = Object.assign({}, add);
clone.a1 = 10;

console.log(add);
console.log(clone);

const oldArray = [5, 6, 9];

const newArray = oldArray.slice();

newArray[1] = 76;

console.log(oldArray);
console.log(newArray);

function talaba(a, b, c) {
    console.log("Talabaning ismi "+ a);
    console.log("Talabaning familiyasi "+ b);
    console.log("Talabaning tugulgan yili "+ c);
}

const malumot = ["Abzal", "Sobitov", "1994"];

talaba(...malumot);

