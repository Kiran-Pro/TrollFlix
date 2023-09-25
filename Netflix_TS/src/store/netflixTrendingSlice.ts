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

export const fetchNetflixTrendingAsync = createAsyncThunk(
  "fetchNetflixTrendingAsync",
  async () => {
    const response = await axios.get(requests.fetchTrending, {
      params: { api_key: API_KEY },
    });
    return response.data;
  }
);

export const netflixTrendingSlice = createSlice({
  name: "netflixTrendingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNetflixTrendingAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNetflixTrendingAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchNetflixTrendingAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = (action.payload.results as any[]).map<Movie>(
        (item: any) => ({
          ...item,
          mediaType: "movie",
        })
      );
    });
  },
});

export default netflixTrendingSlice.reducer;
