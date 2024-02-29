import React, { useEffect, useState } from "react";
import "../Styles/SongsList.scss";
import { useSelector } from "react-redux";

function SongCard(props) {
  const { song, index, togglePlayPause, toggleLikeDislike } = props;
  // console.log(song);
  const [playBtn, setPlatBtn] = useState(false);
  const [playAndPause, setPlayAndPause] = useState(false);
  const isLiked = useSelector((state) => state.likedSongs.includes(song.id));
  const activeSong = useSelector((state) => state.activeSong);
  const imageUrl = `${window.location.origin}/${song.imageUrl}`;

  // console.log(activeSong?.play);
  const togglePlayBtn = () => {
    setPlatBtn(!playBtn);
  };

  useEffect(() => {
    setPlayAndPause(activeSong?.id === song.id ? !playAndPause : false);
  }, [activeSong]);
  return (
    <div
      className="song_card"
      onMouseEnter={togglePlayBtn}
      onMouseLeave={togglePlayBtn}
      style={{backgroundColor:playAndPause?"rgb(47, 57, 57)":"rgb(43, 37, 37)"}}
    >
      <div>
        <div className="play_box">
          {playAndPause ? (
            <span
              className="material-icons"
              onClick={() => togglePlayPause(song.id)}
            >
              pause
            </span>
          ) : playBtn ? (
            <span
              className="material-icons play_btn"
              onClick={() => togglePlayPause(song.id)}
            >
              play_arrow
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
