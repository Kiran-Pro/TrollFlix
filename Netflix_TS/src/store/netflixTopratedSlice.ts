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

export const fetchTopratedAsync = createAsyncThunk(
  "fetchTopratedAsync",
  async () => {
    const response = await axios.get(requests.fetchTopRated, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }
);

export const netflixTopratedSlice = createSlice({
  name: "netflixTopratedSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopratedAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopratedAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchTopratedAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixTopratedSlice.reducer;
