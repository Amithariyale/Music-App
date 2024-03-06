import React from "react";
import { useSelector } from "react-redux";

function LikedSongsCard({ songId, unlikeSong }) {
  const songDetails = useSelector((state) => {
    for (let movie in state.songs) {
      for (let i = 0; i < state.songs[movie].length; i++) {
        if (songId === state.songs[movie][i].id) return state.songs[movie][i];
      }
    }
  });
  const imageUrl = `${window.location.origin}/${songDetails.imageUrl}`;

  return (
    <div className="song_card">
      <img src={imageUrl} alt="" />
      <p>{songDetails.title}</p>
      <span className="material-icons liked" onClick={() => unlikeSong(songId)}>
        favorite
      </span>
    </div>
  );
}

export default LikedSongsCard;
