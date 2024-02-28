import { legacy_createStore as createStore } from "redux";
import { movies, songs } from "../Data/Data";

const intialState = { movies, songs };
const reducer = (state = intialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
