import React from "react";

function MovieItem({movie}) {
  return(
    <div className="movie">
      <h2 className="header">{movie.Title}</h2>
      <div>
        <img
          alt={`Фильм называется: ${movie.Title}`}
          src={movie.Poster}
        />
      </div>
      <p className="year">{movie.Year}</p>

    </div>
  )
}

export default MovieItem
