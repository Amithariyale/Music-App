import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongCard from "./SongCard";

function SongsList() {
  const { movieId } = useParams();
  console.log(movieId);
  const songs = useSelector((state) => state.songs[movieId]);
  const movieDetails = useSelector((state) => {
    return state.movies.filter((movie) => {
      if (movie.id == movieId) return movie;
    })[0];
  });

  console.log(movieDetails);
  const dispatch = useDispatch();

  const toggleLikeDislike = (songId) => {
    console.log(songId);
    dispatch({ type: "TOGGLE_LIKE_DISLIKE", payload: songId });
  };

  const togglePlayPause = (songId) => {
    console.log(songId);
    dispatch({ type: "TOGGLE_PLAY_PAUSE", payload: songId });
  };

  const imageUrl = `${window.location.origin}/${movieDetails.imageUrl}`;
  return (
    <div className="main_song_container">
      <div className="movie">
        <img src={imageUrl} alt="" />
        <div>
          <h1>{movieDetails.title}</h1>
          <h3>{movieDetails.description}</h3>
          <span>{movieDetails.releaseDate}</span>
        </div>
      </div>
      <h2>Songs</h2>
      <div className="songs">
        {songs.map((song, index) => (
          <SongCard
            key={song.id}
            song={song}
            index={index}
            toggleLikeDislike={toggleLikeDislike}
            togglePlayPause={togglePlayPause}
          />
        ))}
      </div>
    </div>
  );
}

export default SongsList;
