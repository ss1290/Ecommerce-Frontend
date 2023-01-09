import {
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  CLEAR_ERRORS,
} from "../slices/newReviewSlice";
import axios from "axios";

export const newReview = (reviewData) => async (dispatch) => {
  try {
    dispatch(NEW_REVIEW_REQUEST());

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(`/api/v1/review`, reviewData, config);

    dispatch(NEW_REVIEW_SUCCESS(data.success));
  } catch (error) {
    dispatch(NEW_REVIEW_FAIL(error.response.data.message));
  }
};

export const newReviewReset = () => async (dispatch) => {
  dispatch(NEW_REVIEW_RESET());
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};
