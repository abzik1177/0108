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