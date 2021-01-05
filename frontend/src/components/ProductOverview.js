import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions.js";
import Product from "./Product.js";
import Message from "./Message";
import Loader from "./Loader";
import "./ProductOverview.css";

function createEntry(productTerm) {
  return (
    <Product
      _id={productTerm._id}
      title={productTerm.title}
      image={productTerm.image}
      price={productTerm.price}
      rating={productTerm.rating}
      numReviews={productTerm.numReviews}
    />
  );
}

//col-sm-12 col-md-6 col-lg-4

function ProductOverview() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="product_overview bg0 p-t-70 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Product Overview</h3>
        </div>
        {loading ? (
          <Loader />
         ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="product">{products.map(createEntry)}</div>
        )}
      </div>
    </div>
  );
}

export default ProductOverview;
