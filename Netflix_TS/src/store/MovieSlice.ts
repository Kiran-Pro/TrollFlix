import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";
import { API_KEY } from "../constants/api";
import { MediaType } from "../types/mediaType";
import { Movie } from "../types/movie";

interface State {
  loading: boolean;
  error?: string;
  movie?: Movie;
  movieId?: string;
}

const initialState: State = {
  loading: false,
};

function getApiUrlByMediaType(mediaType: MediaType, movieId: string) {
  if (mediaType === "movie") {
    return `/movie/${movieId}`;
  } else {
    return `/tv/${movieId}`;
  }
}

export const fetchMovieAsync = createAsyncThunk(
  "fetchMovieAsync",
  async ({ mediaType, movieId }: { mediaType: MediaType; movieId: string }) => {
    const response = await axios.get(getApiUrlByMediaType(mediaType, movieId), {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }
);

export const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovieAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchMovieAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movie = action.payload;
    });
  },
});

export default MovieSlice.reducer;
