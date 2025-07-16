import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CastDetailContainerWrapper from "../CastDetails/CastDetailWrapper";
import PageNotFound from "../ErrorPage/PageNotFound";
import Layout from "../Layout/Layout";
import MoreDetails from "../MovieDetails/MoreDetails";
import SearchWrapper from "../containers/SearchWrapper";

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
    path: "/search",
    element: <SearchWrapper />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
]);

export default router;
