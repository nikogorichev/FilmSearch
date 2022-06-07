import React from "react";
import MovieItem from "./MovieItem";


function MoviesList({movies}) {
  return (
    <div className="movieList">
      {movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)}
    </div>
  )
}

export default MoviesList
