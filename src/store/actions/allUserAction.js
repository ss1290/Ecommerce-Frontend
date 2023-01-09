import {
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  CLEAR_ERRORS,
} from "../slices/allUserSlice";
import axios from "axios";

// get All Users
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(ALL_USERS_REQUEST());
    const { data } = await axios.get(`/api/v1/admin/users`);

    dispatch(ALL_USERS_SUCCESS(data.users));
  } catch (error) {
    dispatch(ALL_USERS_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
