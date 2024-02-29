import React from "react";
import { Outlet } from "react-router-dom";
import Player from "./Player";
import "../Styles/SpotifyApp.scss";
import Notification from "./Notification";

function SpotifyApp() {
  return (
    <div id="root_container">
      <Notification />
      <div className="main_section">
        <Outlet />
      </div>
      <Player />
    </div>
  );
}

export default SpotifyApp;
