import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "newProduct",
  initialState: {
    loading: false,
    success: false,
    product: {},
    error: null,
  },
  reducers: {
    NEW_PRODUCT_REQUEST: (state, action) => {
      state.loading = true;
    },

    NEW_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.product = action.payload.product;
    },

    NEW_PRODUCT_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    NEW_PRODUCT_RESET: (state, action) => {
      state.success = false;
    },

    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});
export default slice.reducer;

export const {
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  CLEAR_ERRORS,
} = slice.actions;
