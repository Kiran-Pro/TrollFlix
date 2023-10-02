import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieCast from "./components/MovieCast.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/tv-details/:movieId"
            element={<MovieCast mediaType="tv-series" />}
          />
          <Route
            path="/movie-details/:movieId"
            element={<MovieCast mediaType="movie" />}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
