import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICastDetails } from "../types/castDetails";
import axios from "../axios";
import { API_KEY } from "../constants/api";

interface State {
  loading: boolean;
  error?: string;
  castDetails?: ICastDetails;
  personId?: string | null;
}

const initialState: State = {
  loading: false,
  castDetails: undefined,
};

export const fetchCastDetailsAsync = createAsyncThunk(
  "fetchCastDetailsAsync",
  async ({ personId }: { personId: string }) => {
    const response = await axios.get(
      `person/${personId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
);

export const CastDetailSlice = createSlice({
  name: "CastDetailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCastDetailsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCastDetailsAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchCastDetailsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.castDetails = action.payload;
    });
  },
});

export default CastDetailSlice.reducer;
