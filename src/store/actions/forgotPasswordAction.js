import {
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  FORGOT_PASSWORD_FAIL,
  CLEAR_ERRORS,
} from "../slices/forgotPasswordSlice";
import axios from "axios";

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch(FORGOT_PASSWORD_REQUEST());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/password/forgot`, email, config);
    console.log(data);
    dispatch(FORGOT_PASSWORD_SUCCESS(data.message));
  } catch (error) {
    console.log(error);
    dispatch(FORGOT_PASSWORD_FAIL(error.response.data.message));
  }
};
export const resetPassword = (token, passwords) => async (dispatch) => {
  try {
    dispatch(RESET_PASSWORD_REQUEST());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/reset/${token}`,
      passwords,
      config
    );

    dispatch(RESET_PASSWORD_SUCCESS(data.success));
  } catch (error) {
    dispatch(RESET_PASSWORD_FAIL(error.response.data.message));
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
