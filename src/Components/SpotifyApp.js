import React from "react";
import { Outlet } from "react-router-dom";
import Player from "./Player";
import "../Styles/SpotifyApp.scss";

function SpotifyApp() {
  return (
    <div id="root_container">
      <div className="main_section">
        <Outlet />
      </div>
      <Player />
    </div>
  );
}

export default SpotifyApp;
