import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongCard from "./SongCard";

function SongsList() {
  const { movieId } = useParams();
  console.log(movieId);
  const songs = useSelector((state) => state.songs[movieId]);

  const dispatch = useDispatch();

  const toggleLikeDislike = (songId) => {
    console.log(songId);
    dispatch({ type: "TOGGLE_LIKE_DISLIKE", payload: songId });
  };

  const togglePlayPause = (songId) => {
    console.log(songId);
    dispatch({ type: "TOGGLE_PLAY_PAUSE", payload: songId });
  };
  return (
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
  );
}

export default SongsList;
