import {
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  MY_ORDERS_FAIL,
  CLEAR_ERRORS,
} from "../slices/myOrderSlice";
import axios from "axios";

export const myOrders = () => async (dispatch) => {
  try {
    dispatch(MY_ORDERS_REQUEST());

    const { data } = await axios.get("/api/v1/orders/me");

    dispatch(MY_ORDERS_SUCCESS(data.orders));
  } catch (error) {
    dispatch(MY_ORDERS_FAIL(error.response.data.message));
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
