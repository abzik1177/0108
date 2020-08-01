"use strict"

const numberOfFilms = +prompt('Skolko filmov vi stomreli', ''); 

const personalMovieDB = {
        count: numberOfFilms,
        movies: [],
        actors: {},
        gender:[],
        privat: false
};

const a = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
      b = prompt('Na skolko otsenite ego?', ''),
      c = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
      d = prompt('Na skolko otsenite ego?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (4 == 4 ) {
    console.log('OK!');
} else {
    console.log('Error');
}

/*const num = 50;

if (num < 49) {
    console.log('Error');
}else if (num > 99) {
    console.log('Mnogo');
}else {
    console.log('Ok');
}

(num ===50) ? console.log("'ok!") : console.log('Error');
*/

const num = 49;

switch (num) {
    case 49:
        console.log('Yoq teparoq');
        break;
    case 100:
        console.log('Yoq pasroq');
        break;
    case 50:
        console.log('V tochku');
        break; 
    default:
        console.log('Yoq bu safar emas');
        break;
}

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++){
//     console.log(num);
//     num++;
// };

let yoshi = 40;

for (let i = 1; i < 60; i++) {
    console.log(yoshi);
    yoshi=yoshi +2;
    if (yoshi === 50){
        console.log('yubiley bilan')
    continue;
    };
    if (yoshi === 60 ) {
        break;
    };
};