import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Users",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  reducers: {
    ALL_USERS_REQUEST: (state, action) => {
      state.loading = true;
    },

    ALL_USERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    ALL_USERS_FAIL: (state, action) => {
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
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
