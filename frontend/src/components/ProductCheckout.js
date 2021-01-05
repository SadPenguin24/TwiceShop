import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";

function ProductCheckout({
  product,
  title,
  image,
  price,
  qty,
  total,
  hidebutton,
  addToCart,
}) {
  const [quantity, setQuantity] = useState(qty);
  const dispatch = useDispatch();

  const minusHandler = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };
  const plusHandler = () => {
    product.countInStock > qty && setQuantity(quantity + 1);
  };

  console.log(qty);
  return (
    <tr className="product_checkout table_row">
      <td className="column-1">
        {!hidebutton && (
          <button className="how-itemcart1">
            <img src={image} alt="IMG" />
          </button>
        )}
      </td>
      <td className="column-2">{title}</td>
      <td className="column-3">$ {price}</td>
      <td className="column-4">
        <div className="wrap-num-product flex-w m-l-auto m-r-0">
          <button
            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
            onClick={minusHandler}
          >
            <i className="fs-16 zmdi zmdi-minus"></i>
          </button>

          <input
            className="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product2"
            value={qty}
          />

          <button
            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
            onClick={plusHandler}
          >
            <i className="fs-16 zmdi zmdi-plus"></i>
          </button>
        </div>
      </td>
      <td className="column-5">${total}</td>
    </tr>
  );
}

export default ProductCheckout;
