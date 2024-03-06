import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SpotifyApp from "./Components/SpotifyApp";
import Home from "./Components/Home";
import SongsList from "./Components/SongsList";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SpotifyApp />}>
            <Route path="" element={<Home />} />
            <Route path="movie/:movieId" element={<SongsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
