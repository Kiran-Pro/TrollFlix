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
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
