import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";
import axios from "../axios";
import { API_KEY } from "../constants/api";

interface State {
  loading: boolean;
  error?: string;
  movies: Movie[];
  pages: number;
}

const initialState: State = {
  loading: false,
  movies: [],
  pages: 0,
};

export const fetchSearchMovieAsync = createAsyncThunk(
  "fetchSearchMovieAsync",
  async ({ searchValue, page }: { searchValue: string; page: number }) => {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${searchValue}&page=${page}`
    );
    return response.data;
  }
);

export const SearchMovieSlice = createSlice({
  name: "SearchMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovieAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchMovieAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchSearchMovieAsync.fulfilled, (state, action) => {
      state.loading = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.movies = action.payload.results;
      state.pages = action.payload.page;
    });
  },
});

export default SearchMovieSlice.reducer;
