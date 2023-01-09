import { createSlice } from "@reduxjs/toolkit";

const fireRequest = (state, action) => {
  state.loading = true;
  state.error = null;
};
const requestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "forgotPassword",
  initialState: {
    loading: false,
    error: null,
    message: null,
    success: null,
  },
  reducers: {
    FORGOT_PASSWORD_REQUEST: fireRequest,
    RESET_PASSWORD_REQUEST: fireRequest,
    FORGOT_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    RESET_PASSWORD_SUCCESS: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    RESET_PASSWORD_FAIL: requestFail,
    FORGOT_PASSWORD_FAIL: requestFail,
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});
export default slice.reducer;

export const {
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FORGOT_PASSWORD_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
