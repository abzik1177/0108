"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        gender:[],
        privat: false,
        start: function() {
            personalMovieDB.count = +prompt('Skolko filmov vi stomreli', '');
        
            while (personalMovieDB.count == '' || personalMovieDB.count == null || 
            isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Skolko filmov vi stomreli', '');
            }
        },
        rememberMyFilms: function() {
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
        },
        detectPersonalLevel: function() {
            if (personalMovieDB.count < 10){
                console.log('Malo');
            } else if (personalMovieDB.count > 10 && personalMovieDB.count < 5){
                console.log("juda yaxshi tomoshabin ekansiz"); 
            } else if (personalMovieDB.count >= 30){
                console.log("Siz kinomansiz");
            }else{
                  console.log("Error");
            }    
        },
        showMyDB: function(hidden){
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: function(){
          if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
          } else {
            personalMovieDB.privat = true;
          }
        },
        writeYourGender: function () {
            for (let i = 1; i < 2; i++) {
                let genres = prompt(`Vashe lyubimiy janr?`).toUpperCase();

                if (genres == '' || genres == null) {
                    console.log('janrlarda xatolik bor');
                    i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
                    personalMovieDB.genres.sort();
                }
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`${i+1} qatordagi janr bu ${item}`);
            });
        }
    };

