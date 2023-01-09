import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDetails,
  clearErrors as productClearErrors,
} from "../../store/actions/productAction";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Rating,
} from "@mui/material";

import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard.jsx";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { addItemsToCart } from "../../store/actions/cartAction";
import {
  newReview,
  newReviewReset,
  clearErrors as reviewClearErrors,
} from "../../store/actions/newReviewAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  let { id } = useParams();

  const { product, loading, error } = useSelector((state) => state.products);

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const options = {
    size: "large",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(productClearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(reviewClearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch(newReviewReset());
    }

    dispatch(getProductDetails(id));
  }, [id, dispatch, reviewError, error, alert, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className='ProductDetails'>
            <div>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                ariaLabel={product.name}>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className='detailsBlock-1'>
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className='detailsBlock-2'>
                <Rating {...options} />
                <span className='detailsBlock-2-span'>
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className='detailsBlock-3'>
                <h1>{`₹${product.price}`}</h1>
                <div className='detailsBlock-3-1'>
                  <div className='detailsBlock-3-1-1'>
                    <button onClick={decreaseQuantity}>-</button>
                    <input
                      readOnly={true}
                      value={quantity}
                      type='number'
                    />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                </div>
                <p>
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className='detailsBlock-4'>
                Description : <p>{product.description}</p>
              </div>
              <button
                onClick={submitReviewToggle}
                className='submitReview'>
                Submit Review
              </button>
            </div>
          </div>
          <h3 className='reviewsHeading'>REVIEWS</h3>

          <Dialog
            aria-labelledby='simple-dialog-title'
            open={open}
            onClose={submitReviewToggle}>
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className='submitDialog'>
              <Rating
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                value={rating}
                size='large'
              />
              <textarea
                className='submitDialogTextArea'
                cols='30'
                rows='5'
                value={comment}
                onChange={(e) => setComment(e.target.value)}></textarea>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={submitReviewToggle}
                color='secondary'>
                Cancel
              </Button>
              <Button
                onClick={reviewSubmitHandler}
                color='primary'>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          {product.reviews && product.reviews[0] ? (
            <div className='reviews'>
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard
                    key={review._id}
                    review={review}
                  />
                ))}
            </div>
          ) : (
            <p className='noReviews'>No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
