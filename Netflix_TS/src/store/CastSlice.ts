import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cast } from "../types/cast";
import axios from "../axios";
import { API_KEY } from "../constants/api";
import { MediaType } from "../types/mediaType";

interface State {
  loading: boolean;
  error?: string;
  castList: Cast[];
  movieId?: string | null;
}

const initialState: State = {
  loading: false,
  castList: [],
  movieId: null,
};

function getApiUrlByMediaType(mediaType: MediaType, movieId: string) {
  if (mediaType === "movie") {
    return `/movie/${movieId}/credits`;
  } else {
    return `/tv/${movieId}/credits`;
  }
}

export const fetchCastAsync = createAsyncThunk(
  "fetchCastAsync",
  async ({ mediaType, movieId }: { mediaType: MediaType; movieId: string }) => {
    debugger;
    const response = await axios.get(getApiUrlByMediaType(mediaType, movieId), {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  }
);

export const CastSlice = createSlice({
  name: "CastSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCastAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCastAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchCastAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.castList = action.payload.cast;
    });
  },
});

export default CastSlice.reducer;
