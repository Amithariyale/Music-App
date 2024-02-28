import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SongCard from "./SongCard";

function SongsList() {
  const { movieId } = useParams();
  console.log(movieId);
  const songs = useSelector((state) => state.songs[movieId]);
  return (
    <div className="songs">
      {songs.map((song, index) => (
        <SongCard key={song.id} song={song} index={index} />
      ))}
    </div>
  );
}

export default SongsList;
