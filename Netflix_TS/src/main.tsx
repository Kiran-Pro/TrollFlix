import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.tsx";
import MoreDetails from "./MovieDetails/MoreDetails.tsx";
import PageNotFound from "./ErrorPage/PageNotFound.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import { Route, BrowserRouter as Router, RouterProvider, Routes } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/tv-details/:movieId",
    element: <MoreDetails mediaType="tv-series" />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/movie-details/:movieId",
    element: <MoreDetails mediaType="movie" />,
    errorElement: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
//old version
{
  /* <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/tv-details/:movieId"
            element={<MoreDetails mediaType="tv-series" />}
          />
          <Route
            path="/movie-details/:movieId"
            element={<MoreDetails mediaType="movie" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router> */
}
