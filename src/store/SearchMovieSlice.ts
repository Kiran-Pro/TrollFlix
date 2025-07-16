import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";
import axios from "../axios";
import { API_KEY } from "../constants/api";
import { BaseSearchState } from "../types/search";

interface State extends BaseSearchState {
  movies: Movie[];
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
      // eslint-disable-next-line no-debugger

      state.loading = false;
      state.movies = action.payload.results;
      state.pages = action.payload.total_pages;
    });
  },
});

export default SearchMovieSlice.reducer;
