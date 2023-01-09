import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "orderDetails",
  initialState: {
    loading: false,
    error: null,
    order: [],
  },
  reducers: {
    ORDER_DETAILS_REQUEST: (state, action) => {
      state.loading = true;
    },
    ORDER_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    ORDER_DETAILS_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});

export default slice.reducer;

export const {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
