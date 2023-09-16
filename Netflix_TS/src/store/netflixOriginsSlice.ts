import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";
import requests from "../request";
import { API_KEY } from "../constants/api";
import { Movie } from "../types/movie";

interface State {
  loading: boolean;
  error?: string;
  movies: Movie[];
}

const initialState: State = {
  loading: false,
  movies: [],
};

export const fetchNetlixOriginsAsync = createAsyncThunk(
  "fetchNetlixOriginsAsync",
  async () => {
    const response = await axios.get(requests.fetchNetflixOriginals, {
      params: {
        api_key: API_KEY,
        with_networks: 213,
      },
    });
    return response.data;
  }
);

export const netflixOriginsSlice = createSlice({
  name: "netflixOriginsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNetlixOriginsAsync.pending, (state) => {
      console.log("fetchNetlixOriginsAsync.pending");
      state.loading = true;
    });
    builder.addCase(fetchNetlixOriginsAsync.rejected, (state) => {
      console.log("fetchNetlixOriginsAsync.rejected");
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API ";
    });
    builder.addCase(fetchNetlixOriginsAsync.fulfilled, (state, action) => {
      console.log("fetchNetlixOriginsAsync.fulfilled");
      state.loading = false;
      state.movies = action.payload.results;
    });
  },
});

export default netflixOriginsSlice.reducer;
