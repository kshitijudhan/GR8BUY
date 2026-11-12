import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCurrencies = createAsyncThunk("fetchCurrencies", async () => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`,
  );
  return response.json();
});

const initialState = {
  rates: {},
  status: "idle",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.rates = action.payload.usd;
    });
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.status = "loading";
    });
  },
});

export default currencySlice.reducer;
