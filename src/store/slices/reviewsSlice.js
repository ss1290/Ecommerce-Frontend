import { createSlice } from "@reduxjs/toolkit";

const fireRequest = (state, action) => {
  state.loading = true;
};

const productRequestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "reviews",
  initialState: {
    loading: false,
    reviews: null,
    error: null,
    isDeleted: false,
  },
  reducers: {
    ALL_REVIEW_REQUEST: fireRequest,
    DELETE_REVIEW_REQUEST: fireRequest,
    ALL_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    DELETE_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    ALL_REVIEW_FAIL: productRequestFail,
    DELETE_REVIEW_FAIL: productRequestFail,
    DELETE_REVIEW_RESET: (state, action) => {
      state.isDeleted = false;
    },

    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});
export default slice.reducer;

export const {
  ALL_REVIEW_REQUEST,
  DELETE_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  DELETE_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  CLEAR_ERRORS,
} = slice.actions;
