import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../axios";
import { API_KEY } from "../constants/api";
import { ICastCredits } from "../types/CastCredits";

interface State {
  loading: boolean;
  error?: string;
  castCredits?: ICastCredits;
  personId?: string | null;
}

const initialState: State = {
  loading: false,
  castCredits: undefined,
};

export const fetchCastCreditsAsync = createAsyncThunk(
  "fetchCastCreditsAsync",
  async ({ personId }: { personId: string }) => {
    const response = await axios.get(
      `person/${personId}/combined_credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
);

export const CastCreditsSlice = createSlice({
  name: "CastCreditsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCastCreditsAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCastCreditsAsync.rejected, (state) => {
      state.loading = false;
      state.error = "Sorry couldn't retrieve the data from API";
    });
    builder.addCase(fetchCastCreditsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.castCredits = action.payload.cast;
    });
  },
});

export default CastCreditsSlice.reducer;
