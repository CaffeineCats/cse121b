import {displayMovie} from "scripts\output.js";

const outputMovie = document.querySelector("#outputMovie");

const getTMovies = async () => {

    const response = await fetch("https://run.mocky.io/v3/619230ec-fb66-4121-9991-d3b7843ef771");

    movieList = await response.json();

    return movieList;
};

let movieList = [];
movieList = getTMovies();

function reset() {
    outputMovie.innerHTML = "";
};

function sortBy(movieList) {

    reset();

    let movieNumber = Number(document.querySelector("#movie").value);

    switch(movieNumber) {
        case 1:
            let actionMovie = movieList.filter(movie => movie.tag === "Action");
            displayMovie(actionMovie, outputMovie);
            break;
        case 2:
            let animationMovie = movieList.filter(movie => movie.tag === "Animation");
            displayMovie(animationMovie, outputMovie);
            break;
        case 3:
            let musicalMovie = movieList.filter(movie => movie.tag === "Musical");
            displayMovie(musicalMovie, outputMovie);
            break;
    }
};  


document.querySelector("#movieButton").addEventListener("click", () =>  {sortBy(movieList) }   );