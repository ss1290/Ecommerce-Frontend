import {
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
} from "../slices/orderSlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch(CREATE_ORDER_REQUEST());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/order/new", order, config);

    dispatch(CREATE_ORDER_SUCCESS(data));
  } catch (error) {
    dispatch(CREATE_ORDER_FAIL(error.response.data.message));
  }
};

// Get All Orders (admin)
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch(ALL_ORDERS_REQUEST());

    const { data } = await axios.get("/api/v1/admin/orders");

    dispatch(ALL_ORDERS_SUCCESS(data.orders));
  } catch (error) {
    dispatch(ALL_ORDERS_FAIL(error.response.data.message));
  }
};

// Update Order
export const updateOrder = (id, order) => async (dispatch) => {
  try {
    dispatch(UPDATE_ORDER_REQUEST());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/admin/order/${id}`,
      order,
      config
    );

    dispatch(UPDATE_ORDER_SUCCESS(data.success));
  } catch (error) {
    dispatch(UPDATE_ORDER_FAIL(error.response.data.message));
  }
};

// Delete Order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch(DELETE_ORDER_REQUEST());

    const { data } = await axios.delete(`/api/v1/admin/order/${id}`);

    dispatch(DELETE_ORDER_SUCCESS(data.success));
  } catch (error) {
    dispatch(DELETE_ORDER_FAIL(error.response.data.message));
  }
};

export const updateOrderReset = () => async (dispatch) => {
  dispatch(UPDATE_ORDER_RESET());
};

export const deleteOrderReset = () => async (dispatch) => {
  dispatch(DELETE_ORDER_RESET());
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
