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

export const fetchHorrorAsync = createAsyncThunk(
  "fetchHorrorAsync",
  async () => {
    const response = await axios.get(requests.fetchHorrorMovies, {
      params: {
        api_key: API_KEY,
        with_genres: 27,
      },
    });
    return response.data;
  }
);

export const netflixHorrorSlice = createSlice({
  name: "netflixComedySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHorrorAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHorrorAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchHorrorAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixHorrorSlice.reducer;
