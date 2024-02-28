import React from "react";

function MovieCard({ movie, displaySongsList }) {
  return (
    <div
      className="movie_card"
      onClick={() => {
        displaySongsList(movie.id);
      }}
    >
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.title}</p>
      <span>{movie.releaseDate}</span>
    </div>
  );
}

export default MovieCard;
