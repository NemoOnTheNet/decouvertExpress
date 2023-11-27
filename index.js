const express = require("express");

const req = require("express/lib/request");

const res = require("express/lib/response");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,

    title: "Citizen Kane",

    director: "Orson Wells",

    year: "1941",

    colors: false,

    duration: 120,
  },

  {
    id: 2,

    title: "The Godfather",

    director: "Francis Ford Coppola",

    year: "1972",

    colors: true,

    duration: 180,
  },

  {
    id: 3,

    title: "Pulp Fiction",

    director: "Quentin Tarantino",

    year: "1994",

    color: true,

    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happenend");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

const welcomeFavourite = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcomeFavourite);

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

const choseMoviebyId = (req, res) => {
  const movieId = parseInt(req.params.id);

  const result = movies.find((movie) => movie.id === movieId);

  if (result) {
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(404).send("Not found");
  }
};

app.get("/api/movies/:id", choseMoviebyId);
