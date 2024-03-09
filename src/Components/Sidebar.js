import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikedSongsCard from "./LikedSongsCard";
import { ActionType } from "../Store/Actions";

const Sidebar = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const songs = useSelector((state) => state.likedSongs);

  const dispatch = useDispatch();
  const unlikeSong = (songId) => {
    dispatch({ type: ActionType.TOGGLE_LIKE_DISLIKE, payload: songId });
  };

  useImperativeHandle(ref, () => {
    return { setDisplay };
  });
  return (
    <div className={`sidebar ${display ? "display" : "none"}`}>
      <span
        className="material-icons close-btn"
        onClick={() => setDisplay(false)}
      >
        close
      </span>
      <div className="liked_song_container">
        <h3>Liked Songs</h3>
        {songs.length ? (
          songs.map((songId) => {
            return (
              <LikedSongsCard
                key={songId}
                songId={songId}
                unlikeSong={unlikeSong}
              />
            );
          })
        ) : (
          <h1 style={{ color: "#ffffff" }}>No Liked songs</h1>
        )}
      </div>
    </div>
  );
});

export default Sidebar;
