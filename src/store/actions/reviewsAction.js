import {
  ALL_REVIEW_REQUEST,
  DELETE_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  DELETE_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  CLEAR_ERRORS,
} from "../slices/reviewsSlice";
import axios from "axios";

export const getAllReviews = (id) => async (dispatch) => {
  try {
    dispatch(ALL_REVIEW_REQUEST());

    const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

    dispatch(ALL_REVIEW_SUCCESS(data.reviews));
  } catch (error) {
    dispatch(ALL_REVIEW_FAIL(error.response.data.message));
  }
};

export const deleteReview = (reviewId, productId) => async (dispatch) => {
  try {
    dispatch(DELETE_REVIEW_REQUEST());

    const { data } = await axios.delete(
      `/api/v1/reviews?id=${reviewId}&productId=${productId}`
    );

    dispatch(DELETE_REVIEW_SUCCESS(data.success));
  } catch (error) {
    dispatch(DELETE_REVIEW_FAIL(error.response.data.message));
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch(CLEAR_ERRORS());
};

export const deleteReviewReset = () => async (dispatch) => {
  dispatch(DELETE_REVIEW_RESET());
};
