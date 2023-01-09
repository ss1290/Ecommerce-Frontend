import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../slices/orderDetailsSlice";
import axios from "axios";

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch(ORDER_DETAILS_REQUEST());

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch(ORDER_DETAILS_SUCCESS(data.order));
  } catch (error) {
    dispatch(ORDER_DETAILS_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
