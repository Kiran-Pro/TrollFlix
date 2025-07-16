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

export const fetchRomanceAsync = createAsyncThunk(
  "fetchRomanceAsync",
  async () => {
    const response = await axios.get(requests.fetchRomanticMovies, {
      params: {
        api_key: API_KEY,
        with_genres: 10749,
      },
    });
    return response.data;
  }
);

export const netflixRomanceSlice = createSlice({
  name: "netflixRomanceSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRomanceAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRomanceAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchRomanceAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixRomanceSlice.reducer;
