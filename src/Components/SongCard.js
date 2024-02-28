import React from "react";
import "../Styles/SongsList.scss";

function SongCard({ song, index }) {
  console.log(song);
  const imageUrl = `${window.location.origin}/${song.imageUrl}`;
  return (
    <div className="song_card">
      <div>
        <p>{index + 1}</p>
        <img src={imageUrl} alt="" />
        <p>{song.title}</p>
      </div>
      <div>
        <span>heart</span>
        <p>{song.viewCount}</p>
        <p>...</p>
      </div>
    </div>
  );
}

export default SongCard;
