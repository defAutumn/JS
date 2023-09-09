'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let first = prompt('Один из последних просмотренных фильмов?');
let second = prompt('На сколько оцените его?');

personalMovieDB.movies[first] = second;

console.log(personalMovieDB);
