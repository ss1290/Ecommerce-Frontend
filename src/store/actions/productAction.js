import {
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
} from "../slices/productSlice";
import axios from "axios";

export const getProducts =
  (keyword = "", currentPage = 1, price = [0, 25000], category, ratings = 0) =>
  async (dispatch) => {
    try {
      dispatch(ALL_PRODUCT_REQUEST());
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;

      if (category) {
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      }

      const { data } = await axios.get(link);

      dispatch(ALL_PRODUCT_SUCCESS(data));
    } catch (error) {
      dispatch(ALL_PRODUCT_FAIL(error.response.data.message));
    }
  };

export const getAdminProduct = () => async (dispatch) => {
  try {
    dispatch(ADMIN_PRODUCT_REQUEST());

    const { data } = await axios.get("/api/v1/admin/products");

    dispatch(ADMIN_PRODUCT_SUCCESS(data.products));
  } catch (error) {
    dispatch(ADMIN_PRODUCT_FAIL(error.response.data.message));
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(PRODUCT_DETAILS_REQUEST());

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch(PRODUCT_DETAILS_SUCCESS(data.product));
  } catch (error) {
    dispatch(PRODUCT_DETAILS_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
