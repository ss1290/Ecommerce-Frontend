import {
  LOGIN_REQUEST,
  REGISTER_USER_REQUEST,
  LOAD_USER_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS,
  LOAD_USER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_FAIL,
  LOAD_USER_FAIL,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from "../slices/userSlice";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(LOGIN_REQUEST);

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );

    dispatch(LOGIN_SUCCESS(data.user));
  } catch (error) {
    dispatch(LOGIN_FAIL(error.response.data.message));
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(REGISTER_USER_REQUEST());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(`/api/v1/register`, userData, config);

    dispatch(REGISTER_USER_SUCCESS(data.user));
  } catch (error) {
    dispatch(REGISTER_USER_FAIL(error.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LOAD_USER_REQUEST());

    const { data } = await axios.get(`/api/v1/me`);

    dispatch(LOAD_USER_SUCCESS(data.user));
  } catch (error) {
    dispatch(LOAD_USER_FAIL(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch(LOGOUT_SUCCESS());
  } catch (error) {
    dispatch(LOGOUT_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
