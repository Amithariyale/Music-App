import React, { useEffect, useState } from "react";
import "../Styles/SongsList.scss";
import { useSelector } from "react-redux";

function SongCard(props) {
  const { song, index, togglePlayPause, toggleLikeDislike } = props;

  const [playBtn, setPlatBtn] = useState(false);
  const isLiked = useSelector((state) => state.likedSongs.includes(song.id));
  const activeSong = useSelector((state) => state.activeSong);

  const playAndPause = activeSong?.play && activeSong.id === song.id;

  const imageUrl = `${window.location.origin}/${song.imageUrl}`;

  const togglePlayBtn = () => {
    setPlatBtn(!playBtn);
  };

  return (
    <div
      className={`song_card ${activeSong?.id === song.id ? "active" : ""}`}
      onMouseEnter={togglePlayBtn}
      onMouseLeave={togglePlayBtn}
    >
      <div>
        <div className="play_box">
          {playBtn ? (
            <span
              className="material-icons play_btn"
              onClick={() => togglePlayPause(song.id)}
            >
              {playAndPause ? "pause" : "play_arrow"}
            </span>
          ) : (
            <span>{index + 1}</span>
          )}
        </div>
        <img src={imageUrl} alt="" />
        <p>{song.title}</p>
      </div>
      <div>
        {playBtn && (
          <span
            onClick={() => toggleLikeDislike(song.id)}
            style={{ color: isLiked ? "red" : "#ffffff" }}
            className="material-icons like_btn"
          >
            favorite
          </span>
        )}
        <p>{song.viewCount}</p>
        <p>...</p>
      </div>
    </div>
  );
}

export default SongCard;
