import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard.jsx";
import MetaData from "../layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, clearErrors } from "../../store/actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title='ECOMMERCE' />
          <div className='banner'>
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href='#container'>
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className='homeHeading'>Featured Products</h2>
          <div
            className='container'
            id='container'>
            {products &&
              products.map((product, i) => (
                <Product
                  product={product}
                  key={i}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
