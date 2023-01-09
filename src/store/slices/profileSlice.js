import { createSlice } from "@reduxjs/toolkit";

const fireRequest = (state, action) => {
  state.loading = true;
};
const updateSuccess = (state, action) => {
  state.loading = false;
  state.isUpdated = action.payload;
};
const requestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
const updateReset = (state, action) => {
  state.isUpdated = false;
};

const slice = createSlice({
  name: "Profile",
  initialState: {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    message: null,
    error: null,
    user: {},
  },
  reducers: {
    UPDATE_PROFILE_REQUEST: fireRequest,
    UPDATE_PASSWORD_REQUEST: fireRequest,
    UPDATE_USER_REQUEST: fireRequest,
    DELETE_USER_REQUEST: fireRequest,
    USER_DETAILS_REQUEST: fireRequest,
    UPDATE_PROFILE_SUCCESS: updateSuccess,
    UPDATE_PASSWORD_SUCCESS: updateSuccess,
    USER_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    UPDATE_USER_SUCCESS: updateSuccess,
    DELETE_USER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload.success;
      state.message = action.payload.message;
    },
    UPDATE_PROFILE_FAIL: requestFail,
    UPDATE_PASSWORD_FAIL: requestFail,
    UPDATE_USER_FAIL: requestFail,
    DELETE_USER_FAIL: requestFail,
    USER_DETAILS_FAIL: requestFail,
    UPDATE_PROFILE_RESET: updateReset,
    UPDATE_PASSWORD_RESET: updateReset,
    UPDATE_USER_RESET: updateReset,
    DELETE_USER_RESET: (state, action) => {
      state.isDeleted = false;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});

export default slice.reducer;

export const {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_FAIL,
  DELETE_USER_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_RESET,
  UPDATE_USER_RESET,
  DELETE_USER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
