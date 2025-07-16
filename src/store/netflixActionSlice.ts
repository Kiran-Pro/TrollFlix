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

export const fetchActionAsync = createAsyncThunk(
  "fetchActionAsync",
  async () => {
    const response = await axios.get(requests.fetchActionMovies, {
      params: {
        api_key: API_KEY,
        with_genres: 28,
      },
    });
    return response.data;
  }
);

export const netflixActionSlice = createSlice({
  name: "netflixActionSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActionAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchActionAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchActionAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixActionSlice.reducer;
