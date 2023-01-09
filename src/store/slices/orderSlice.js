import { createSlice } from "@reduxjs/toolkit";

const fireRequest = (state, action) => {
  state.loading = true;
};
const requestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: null,
    order: null,
    orders: [],
    isUpdated: false,
    isDeleted: false,
  },
  reducers: {
    CREATE_ORDER_REQUEST: fireRequest,
    ALL_ORDERS_REQUEST: fireRequest,
    UPDATE_ORDER_REQUEST: fireRequest,
    DELETE_ORDER_REQUEST: fireRequest,
    ALL_ORDERS_SUCCESS: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    CREATE_ORDER_SUCCESS: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    UPDATE_ORDER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    DELETE_ORDER_SUCCESS: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    CREATE_ORDER_FAIL: requestFail,
    ALL_ORDERS_FAIL: requestFail,
    UPDATE_ORDER_FAIL: requestFail,
    DELETE_ORDER_FAIL: requestFail,
    DELETE_ORDER_RESET: (state, action) => {
      state.isDeleted = false;
    },
    UPDATE_ORDER_RESET: (state, action) => {
      state.isUpdated = false;
    },
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});

export default slice.reducer;

export const {
  CREATE_ORDER_REQUEST,
  ALL_ORDERS_REQUEST,
  CREATE_ORDER_SUCCESS,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS_FAIL,
  CREATE_ORDER_FAIL,
  CLEAR_ERRORS,
  UPDATE_ORDER_REQUEST,
  DELETE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_RESET,
  DELETE_ORDER_RESET,
} = slice.actions;
