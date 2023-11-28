import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cast } from "../types/cast";
import axios from "../axios";
import { API_KEY } from "../constants/api";

interface State {
  loading: boolean;
  error?: string;
  person: Cast[];
  pages: number;
}

const initialState: State = {
  loading: false,
  person: [],
  pages: 0,
};

export const fetchSearchPersonAsync = createAsyncThunk(
  "fetchSearchPersonAsync",
  async ({ searchValue, page }: { searchValue: string; page: number }) => {
    const response = await axios.get(
      `search/person?api_key=${API_KEY}&query=${searchValue}&page=${page}`
    );
    return response.data;
  }
);

export const SearchPersonSlice = createSlice({
  name: "SearchPersonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchPersonAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchPersonAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchSearchPersonAsync.fulfilled, (state, action) => {
      state.loading = false;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.person = action.payload.results;
      state.pages = action.payload.page;
    });
  },
});

export default SearchPersonSlice.reducer;
