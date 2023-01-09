import {
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  CLEAR_ERRORS,
} from "../slices/AddProductSlice";
import axios from "axios";

// Create Product
export const createProduct = (productData) => async (dispatch) => {
  try {
    dispatch(NEW_PRODUCT_REQUEST());

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/product/new`,
      productData,
      config
    );

    dispatch(NEW_PRODUCT_SUCCESS(data));
  } catch (error) {
    dispatch(NEW_PRODUCT_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};

export const newProductReset = () => async (dispatch) => {
  dispatch(NEW_PRODUCT_RESET());
};
