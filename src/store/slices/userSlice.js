import { createSlice } from "@reduxjs/toolkit";

const fetchUserRequest = (state, action) => {
  state.loading = true;
  state.isAuthenticated = false;
};
const fetchUserSuccess = (state, action) => {
  state.loading = false;
  state.isAuthenticated = true;
  state.user = action.payload;
};
const fetchUserFail = (state, action) => {
  state.loading = false;
  state.isAuthenticated = false;
  state.user = null;
  state.error = action.payload;
};

const slice = createSlice({
  name: "User",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: null,
  },
  reducers: {
    LOGIN_REQUEST: fetchUserRequest,
    REGISTER_USER_REQUEST: fetchUserRequest,
    LOAD_USER_REQUEST: fetchUserRequest,
    LOGIN_SUCCESS: fetchUserSuccess,
    REGISTER_USER_SUCCESS: fetchUserSuccess,
    LOAD_USER_SUCCESS: fetchUserSuccess,
    LOGOUT_SUCCESS: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
    LOGIN_FAIL: fetchUserFail,
    REGISTER_USER_FAIL: fetchUserFail,
    LOAD_USER_FAIL: fetchUserFail,
    LOGOUT_FAIL: (state, action) => {
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
  LOGIN_REQUEST,
  REGISTER_USER_REQUEST,
  LOAD_USER_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOAD_USER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  LOAD_USER_FAIL,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
