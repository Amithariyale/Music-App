import React, { useRef } from "react";
import "../Styles/Notification.scss";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function Notification() {
  const likeCount = useSelector((state) => state.likedSongs.length);

  const displayRef = useRef(null);
  const showSidebar = () => {
    displayRef.current.setDisplay(true);
  };
  return (
    <div className="badge_container">
      <div className="badge" onClick={showSidebar}>
        <span className="material-icons">favorite</span>
        <b>{likeCount}</b>
      </div>
      <Sidebar ref={displayRef} />
    </div>
  );
}

export default Notification;
