import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slices/productSlice";
import user from "./slices/userSlice";
import profile from "./slices/profileSlice";
import forgotPassword from "./slices/forgotPasswordSlice";
import cart from "./slices/cartSlice";
import order from "./slices/orderSlice";
import myOrders from "./slices/myOrderSlice";
import orderDetails from "./slices/orderDetailsSlice";
import newReview from "./slices/newReviewSlice";
import newProduct from "./slices/AddProductSlice";
import product from "./slices/updateProductsSlice";
import users from "./slices/allUserSlice";
import reviews from "./slices/reviewsSlice";

const reducer = combineReducers({
  products,
  user,
  profile,
  forgotPassword,
  cart,
  order,
  myOrders,
  orderDetails,
  newReview,
  newProduct,
  product,
  users,
  reviews,
});

const store = configureStore({
  reducer,
});

export default store;
