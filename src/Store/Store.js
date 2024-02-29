import { legacy_createStore as createStore } from "redux";
import { movies, songs } from "../Data/Data";
import { ActionType } from "./Actions";

const intialState = { movies, songs, activeSong: null, likedSongs: [] };
const reducer = (state = intialState, action) => {
  if (action.type === ActionType.TOGGLE_LIKE_DISLIKE) {
    const songId = action.payload;
    if (state.likedSongs.includes(songId)) {
      return {
        ...state,
        likedSongs: state.likedSongs.filter((id) => id !== songId),
      };
    } else return { ...state, likedSongs: [...state.likedSongs, songId] };
  }
  if (action.type === ActionType.TOGGLE_PLAY_PAUSE) {
    const songId = action.payload;
    if (state.activeSong?.id === songId) {
      return {
        ...state,
        activeSong: { id: songId, play: !state.activeSong.play },
      };
    } else return { ...state, activeSong: { id: songId, play: true } };
  }
  return state;
};

const store = createStore(reducer);

export default store;
