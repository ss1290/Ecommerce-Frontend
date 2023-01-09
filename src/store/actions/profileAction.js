import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_FAIL,
  DELETE_USER_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_RESET,
  UPDATE_USER_RESET,
  DELETE_USER_RESET,
  CLEAR_ERRORS,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from "../slices/profileSlice";
import axios from "axios";

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch(UPDATE_PROFILE_REQUEST());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(`/api/v1/me/update`, userData, config);

    dispatch(UPDATE_PROFILE_SUCCESS(data.success));
  } catch (error) {
    dispatch(UPDATE_PROFILE_FAIL(error.response.data.message));
  }
};

export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch(UPDATE_PASSWORD_REQUEST());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/password/update`,
      passwords,
      config
    );

    dispatch(UPDATE_PASSWORD_SUCCESS(data.success));
  } catch (error) {
    dispatch(UPDATE_PASSWORD_FAIL(error.response.data.message));
  }
};

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch(USER_DETAILS_REQUEST());
    const { data } = await axios.get(`/api/v1/admin/user/${id}`);

    dispatch(USER_DETAILS_SUCCESS(data.user));
  } catch (error) {
    dispatch(USER_DETAILS_FAIL(error.response.data.message));
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch(UPDATE_USER_REQUEST());

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/admin/user/${id}`,
      userData,
      config
    );

    dispatch(UPDATE_USER_SUCCESS(data.success));
  } catch (error) {
    dispatch(UPDATE_USER_FAIL(error.response.data.message));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(DELETE_USER_REQUEST());

    const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

    dispatch(DELETE_USER_SUCCESS(data));
  } catch (error) {
    dispatch(DELETE_USER_FAIL(error.response.data.message));
  }
};
export const updatePasswordReset = () => async (dispatch) => {
  dispatch(UPDATE_PASSWORD_RESET());
};
export const deleteUserReset = () => async (dispatch) => {
  dispatch(DELETE_USER_RESET());
};
export const updateProfileReset = () => async (dispatch) => {
  dispatch(UPDATE_PROFILE_RESET());
};
export const updateUserReset = () => async (dispatch) => {
  dispatch(UPDATE_USER_RESET());
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
