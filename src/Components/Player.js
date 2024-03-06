import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Player.scss";

function Player() {
  const activeSong = useSelector((state) => state.activeSong);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  let songDetails = useSelector((state) => {
    if (!activeSong) return null;

    for (let movie in state.songs) {
      const songsArr = state.songs[movie];
      for (let i = 0; i < songsArr.length; i++) {
        if (songsArr[i].id === activeSong.id) return songsArr[i];
      }
    }
  });

  const isLiked = useSelector((state) => {
    if (activeSong) return state.likedSongs.includes(activeSong.id);
  });
  const toggleLikeDislike = () => {
    dispatch({
      type: "TOGGLE_LIKE_DISLIKE",
      payload: activeSong.id,
    });
  };

  useEffect(() => {
    if (activeSong)
      activeSong.play ? audioRef.current.play() : audioRef.current.pause();
  }, [activeSong]);

  const togglePlayPause = (songId) => {
    console.log(songId);
    dispatch({ type: "TOGGLE_PLAY_PAUSE", payload: songId });
  };
  if (!activeSong) return <div className="player">Please Select a song</div>;

  const fileAddress = `${window.location.origin}/${songDetails.fileAddress}`;
  const imageUrl = `${window.location.origin}/${songDetails.imageUrl}`;

  return (
    <div className="player">
      <div className="song_details">
        <img src={imageUrl} alt="" />
        <p>{songDetails.title}</p>
      </div>
      <audio controls ref={audioRef} key={activeSong.id}>
        <source src={fileAddress} />
      </audio>
      <div id="play_btn" >
        <span
          className="material-icons"
          onClick={() => togglePlayPause(activeSong.id)}
        >
          {activeSong.play ? "pause" : "play_arrow"}
        </span>
      </div>
      <div>
        <span
          className="material-icons like_btn"
          style={{ color: isLiked ? "red" : "#ffffff" }}
          onClick={toggleLikeDislike}
        >
          favorite
        </span>
      </div>
    </div>
  );
}

export default Player;
