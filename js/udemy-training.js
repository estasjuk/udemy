const numberOfFilms = +prompt("Сколько фильмов Вы уже просмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i += 1) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    
    if (a != null && b != null && a != "" && b != "" && a.length < 50 && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done");
    }
        else { 
        console.log("Error");
        i -= 1;
        }
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    console.log("Вы - классический зритель");
}
else if (personalMovieDB.count > 30) {
    console.log("Вы - киноман");
}
else console.log("Произошла ошибка"); 


console.log(personalMovieDB);