import { createSlice } from "@reduxjs/toolkit";

const productRequest = (state, action) => {
  state.loading = true;
};

const productRequestFail = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
    error: null,
    loading: false,
    productsCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0,
  },
  reducers: {
    ALL_PRODUCT_REQUEST: productRequest,
    ADMIN_PRODUCT_REQUEST: productRequest,
    ALL_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredProductsCount = action.payload.filteredProductsCount;
    },
    ADMIN_PRODUCT_SUCCESS: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    ALL_PRODUCT_FAIL: productRequestFail,
    ADMIN_PRODUCT_FAIL: productRequestFail,
    PRODUCT_DETAILS_REQUEST: (state, action) => {
      state.loading = true;
    },
    PRODUCT_DETAILS_SUCCESS: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    PRODUCT_DETAILS_FAIL: productRequestFail,
    CLEAR_ERRORS: (state, action) => {
      state.error = null;
    },
  },
});
export default slice.reducer;

export const {
  ALL_PRODUCT_REQUEST,
  ADMIN_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ADMIN_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} = slice.actions;
