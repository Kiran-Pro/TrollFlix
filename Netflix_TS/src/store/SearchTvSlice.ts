import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types/movie";
import axios from "../axios";
import { API_KEY } from "../constants/api";

interface State {
  loading: boolean;
  error?: string;
  tv: Movie[];
  pages: number;
}

const initialState: State = {
  loading: false,
  tv: [],
  pages: 0,
};

export const fetchSearchTvAsync = createAsyncThunk(
  "fetchSearchTvAsync",
  async ({ searchValue, page }: { searchValue: string; page: number }) => {
    const response = await axios.get(
      `search/tv?api_key=${API_KEY}&query=${searchValue}&page=${page}`
    );
    return response.data;
  }
);

export const SearchTvSlice = createSlice({
  name: "SearchTvSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchTvAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchTvAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchSearchTvAsync.fulfilled, (state, action) => {
      state.loading = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.tv = action.payload.results;
      state.pages = action.payload.page;
    });
  },
});

export default SearchTvSlice.reducer;
