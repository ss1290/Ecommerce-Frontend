import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "myorders",
  initialState: {
    loading: false,
    error: null,
    orders: [],
  },
  reducers: {
    MY_ORDERS_REQUEST: (state, action) => {
      state.loading = true;
    },
    MY_ORDERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    MY_ORDERS_FAIL: (state, action) => {
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
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
