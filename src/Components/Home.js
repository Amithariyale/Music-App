import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import "../Styles/Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const movies = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const displaySongsList = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          displaySongsList={displaySongsList}
        />
      ))}
    </div>
  );
}

export default Home;
