"use strict"

const numberOfFilms = +prompt('Skolko filmov vi stomreli', ''); 

const personalMovieDB = {
        count: numberOfFilms,
        movies: [],
        actors: {},
        gender:[],
        privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Odin iz poslednix prosmotrennix filmov?', ''),
          b = prompt('Na skolko otsenite ego?', '');

         if ( a != null && b != null  && a!='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("1 javoblar toliq kiritildi")
         } else{
             console.log("javoblar toliq emas");
             i--;
         }
};

console.log(personalMovieDB);

if (numberOfFilms < 10){
    console.log('Malo');
} else if (numberOfFilms > 10 && numberOfFilms < 30){
    console.log("juda yaxshi tomoshabin ekansiz");
} else if (numberOfFilms > 30){
    console.log("Siz kinomansiz");
}else{
      console.log("Error");
};

