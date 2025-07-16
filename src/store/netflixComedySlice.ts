import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";
import axios from "../axios";
import requests from "../request";
import { API_KEY } from "../constants/api";

interface State {
  loading: boolean;
  error?: string;
  movies: Movie[];
}
const initialState: State = {
  loading: false,
  movies: [],
};

export const fetchComedyAsync = createAsyncThunk(
  "fetchComedyAsync",
  async () => {
    const response = await axios.get(requests.fetchComedyMovies, {
      params: {
        api_key: API_KEY,
        with_genres: 35,
      },
    });
    return response.data;
  }
);

export const netflixComedySlice = createSlice({
  name: "netflixComedySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComedyAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComedyAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchComedyAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixComedySlice.reducer;
