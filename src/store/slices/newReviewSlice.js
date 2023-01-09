import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "newReview",
  initialState: {
    error: null,
    loading: false,
    success: false,
  },
  reducers: {
    NEW_REVIEW_REQUEST: (state, action) => {
      state.loading = true;
    },
    NEW_REVIEW_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    NEW_REVIEW_FAIL: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    NEW_REVIEW_RESET: (state, action) => {
      state.success = false;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});
export default slice.reducer;

export const {
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  CLEAR_ERRORS,
} = slice.actions;
