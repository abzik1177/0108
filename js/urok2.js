"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Skolko filmov vi stomreli', '');

    while (numberOfFilms == '' || numberOfFilms == null || 
    isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Skolko filmov vi stomreli', '');
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        gender:[],
        privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
            b = prompt('Na skolko otsenite ego?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10){
        console.log('Malo');
    } else if (numberOfFilms > 10 && numberOfFilms < 30){
        console.log("juda yaxshi tomoshabin ekansiz"); 
    } else if (numberOfFilms >= 30){
        console.log("Siz kinomansiz");
    }else{
          console.log("Error");
    }    
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYourGender() {
    for (let i=1; i <= 3; i++) {
        const genre = prompt(`Vashe lyubimiy janr? ${i}`);
        personalMovieDB.gender[i - 1] = genre;
    }
}

writeYourGender(); 