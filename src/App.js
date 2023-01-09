import "./App.css";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import { loadUser } from "./store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./component/Routes/ProtectedRoute";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx";
import Search from "./component/Product/Search.jsx";
import LoginSignUp from "./component/User/LoginSignUp.jsx";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import Profile from "./component/User/Profile.jsx";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import Payment from "./component/Cart/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";
import NewProduct from "./component/Admin/NewProduct.jsx";
import UpdateProduct from "./component/Admin/UpdateProduct.jsx";
import OrderList from "./component/Admin/OrderList.jsx";
import ProcessOrder from "./component/Admin/ProcessOrder.jsx";
import UsersList from "./component/Admin/UsersList.jsx";
import UpdateUser from "./component/Admin/UpdateUser.jsx";
import ProductReviews from "./component/Admin/ProductReviews.jsx";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    dispatch(loadUser());
    getStripeApiKey();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/product/:id'
          element={<ProductDetails />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/products/:keyword'
          element={<Products />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='/account'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/me/update'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/password/update'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path='/password/forgot'
          element={<ForgotPassword />}
        />
        <Route
          path='/password/reset/:token'
          element={<ResetPassword />}
        />
        <Route
          path='/login'
          element={<LoginSignUp />}
        />
        <Route
          path='/Cart'
          element={<Cart />}
        />
        <Route
          path='/shipping'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Shipping />
            </ProtectedRoute>
          }
        />
        <Route
          path='/order/confirm'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ConfirmOrder />
            </ProtectedRoute>
          }
        />

        {stripeApiKey && (
          <Route
            path='/process/payment'
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Payment />
                </ProtectedRoute>
              </Elements>
            }
          />
        )}
        <Route
          path='/success'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path='/orders'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path='/order/:id'
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/dashboard'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/products'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/product'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <NewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/product/:id'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <UpdateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/orders'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <OrderList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/order/:id'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <ProcessOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/users'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/user/:id'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <UpdateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/reviews'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}>
              <ProductReviews />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
