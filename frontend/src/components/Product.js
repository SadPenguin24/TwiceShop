import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating.js";
import "./Product.css";

function Product({ _id, title, image, price, rating, numReviews }) {
  return (
    <div className="product col-sm-12 col-md-6 col-lg-4 mx-auto mx-md-0">
      <div className="p-b-35">
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img className="product_image" src={image} alt="IMG-PRODUCT" />

            <button className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
              Add to Cart
            </button>
          </div>

          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l">
              <Link
                to={`/product/${_id}`}
                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
              >
                {title}
              </Link>

              <span className="stext-105 cl3"> ${price} </span>
            </div>

            <div className="block2-txt-child2 flex-r">
              <div className="dis-block pos-relative ">
                <Rating value={rating} />
                <span>
                  {`${numReviews} reviews` && `${numReviews} reviews`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
