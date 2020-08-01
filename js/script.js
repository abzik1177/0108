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