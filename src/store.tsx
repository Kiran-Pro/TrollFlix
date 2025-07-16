import { configureStore } from "@reduxjs/toolkit";
import netflixOriginsSlice from "./store/netflixOriginsSlice";
import netflixTrendingSlice from "./store/netflixTrendingSlice";
import netflixTopratedSlice from "./store/netflixTopratedSlice";
import netflixActionSlice from "./store/netflixActionSlice";
import netflixComedySlice from "./store/netflixComedySlice";
import netflixHorrorSlice from "./store/netflixHorrorSlice";
import netflixRomanceSlice from "./store/netflixRomanceSlice";
import CastSlice from "./store/CastSlice";
import MovieSlice from "./store/MovieSlice";
import CastDetailSlice from "./store/CastDetailSlice";
import CastCreditsSlice from "./store/CastCreditsSlice";
import SearchMovieSlice from "./store/SearchMovieSlice";
import SearchTvSlice from "./store/SearchTvSlice";
import SearchPersonSlice from "./store/SearchPersonSlice";

const store = configureStore({
  reducer: {
    netflixOriginsSlice: netflixOriginsSlice,
    netflixTrendingSlice: netflixTrendingSlice,
    netflixTopratedSlice: netflixTopratedSlice,
    netflixActionSlice: netflixActionSlice,
    netflixComedySlice: netflixComedySlice,
    netflixHorrorSlice: netflixHorrorSlice,
    netflixRomanceSlice: netflixRomanceSlice,
    castSlice: CastSlice,
    movieSlice: MovieSlice,
    castDetails: CastDetailSlice,
    CastCreditsSlice: CastCreditsSlice,
    SearchMovieSlice: SearchMovieSlice,
    SearchTvSlice: SearchTvSlice,
    SearchPersonSlice: SearchPersonSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
