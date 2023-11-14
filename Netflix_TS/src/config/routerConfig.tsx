import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageNotFound from "../ErrorPage/PageNotFound";
import MoreDetails from "../MovieDetails/MoreDetails";
import CastDetailContainerWrapper from "../CastDetails/CastDetailWrapper";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/tv/:movieId",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <MoreDetails mediaType="tv" />,
      },
      {
        path: "cast/:id",
        element: <CastDetailContainerWrapper />,
      },
    ],
  },
  {
    path: "/movie/:movieId",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MoreDetails mediaType="movie" />,
      },
      {
        path: "cast/:id",
        element: <CastDetailContainerWrapper />,
        errorElement: <PageNotFound />,
      },
    ],
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
]);

export default router;
