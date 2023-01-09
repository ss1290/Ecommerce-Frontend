import { createSlice } from "@reduxjs/toolkit";

const fireRequest = (state, action) => {
  state.loading = true;
};

const requestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    error: null,
  },
  reducers: {
    DELETE_PRODUCT_REQUEST: fireRequest,
    UPDATE_PRODUCT_REQUEST: fireRequest,

    DELETE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    UPDATE_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    DELETE_PRODUCT_FAIL: requestFail,
    UPDATE_PRODUCT_FAIL: requestFail,
    DELETE_PRODUCT_RESET: (state, action) => {
      state.isDeleted = false;
    },
    UPDATE_PRODUCT_RESET: (state, action) => {
      state.isUpdated = false;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});

export default slice.reducer;

export const {
  DELETE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
  CLEAR_ERRORS,
} = slice.actions;
