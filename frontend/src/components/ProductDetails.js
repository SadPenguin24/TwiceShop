import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import "./ProductDetails.css";
import ItemDescription from "./ItemDescription";
import Loader from "./Loader";
import Message from "./Message";
import Rating from "./Rating.js";

function ProductDetails({ history, match }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const minusHandler = () => {
    qty > 1 && setQty(qty - 1);
  };
  const plusHandler = () => {
    product.countInStock > qty && setQty(qty + 1);
  };

  return (
    <div className="productDetails sec-product-detail bg0 p-t-65 p-b-60">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col=sm-12 col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25  p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="item-slick3" data-thumb={product.image}>
                    <div className="wrap-pic-w pos-relative">
                      <img src={product.image} alt="IMG-PRODUCT" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <div className="itemSummary">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    {product.title}
                  </h4>

                  <span className="mtext-106 cl2">
                    ${product.price} <Rating value={product.rating} />
                  </span>

                  <p className="stext-102 cl3 p-t-23">{product.description}</p>
                </div>
                {product.countInStock === 0 ? (
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <span className="mtext-104 c13 center p-r-10 p-b-10">
                        Out of Stock
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <span className="mtext-104 c13 center p-r-10 p-b-10">
                        In Stock: {product.countInStock}
                      </span>

                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div
                            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                            onClick={minusHandler}
                          >
                            <i className="fs-16 zmdi zmdi-minus"></i>
                          </div>

                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            value={qty}
                          />

                          <div
                            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                            onClick={plusHandler}
                          >
                            <i className="fs-16 zmdi zmdi-plus"></i>
                          </div>
                        </div>

                        <button
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                          onClick={addToCartHandler}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                  <div className="flex-m bor9 p-r-10 m-r-11">
                    <a
                      href="/"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                      data-tooltip="Add to Wishlist"
                    >
                      <i className="zmdi zmdi-favorite"></i>
                    </a>
                  </div>

                  <span
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Facebook"
                  >
                    <i className="fa fa-facebook"></i>
                  </span>

                  <span
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </span>

                  <span
                    className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                    data-tooltip="Google Plus"
                  >
                    <i className="fa fa-google-plus"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ItemDescription
            numReviews={product.numReviews}
            description={product.description}
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
