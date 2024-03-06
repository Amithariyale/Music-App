import { legacy_createStore as createStore } from "redux";
import { movies, songs } from "../Data/Data";
import { ActionType } from "./Actions";

let savedState = JSON.parse(localStorage.getItem("musicStore"));
if (savedState) {
  savedState = {
    ...savedState,
    activeSong: { ...savedState.activeSong, play: false },
  };
}
const intialState = {
  movies,
  songs,
  activeSong: { id: 100, play: true },
  likedSongs: [],
};
const reducer = (state = savedState || intialState, action) => {
  if (action.type === ActionType.TOGGLE_LIKE_DISLIKE) {
    const songId = action.payload;
    if (state.likedSongs.includes(songId)) {
      state = {
        ...state,
        likedSongs: state.likedSongs.filter((id) => id !== songId),
      };
    } else state = { ...state, likedSongs: [...state.likedSongs, songId] };
  } else if (action.type === ActionType.TOGGLE_PLAY_PAUSE) {
    const songId = action.payload;
    if (state.activeSong?.id === songId) {
      state = {
        ...state,
        activeSong: { id: songId, play: !state.activeSong.play },
      };
    } else state = { ...state, activeSong: { id: songId, play: true } };
  }
  localStorage.setItem("musicStore", JSON.stringify(state));
  return state;
};

const store = createStore(reducer);
export default store;
