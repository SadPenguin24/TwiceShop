import React, { useState } from "react";
import "./Checkout.css";
import ProductCheckout from "./ProductCheckout.js";
import Subtotal from "./Subtotal.js";

function Checkout({ cartItems, qty, total }) {
  return (
    <div className="checkout">
      <form class="bg0 p-t-75 p-b-85">
        <div class="container">
          <div class="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <tr className="table_head">
                      <th className="column-1">Product</th>
                      <th className="column-2"></th>
                      <th className="column-3">Price</th>
                      <th className="column-4">Quantity</th>
                      <th className="column-5">Total</th>
                    </tr>
                    {cartItems?.length
                      ? cartItems.map((item) => (
                          <tr className="product_checkout table_row">
                            <td className="column-1">
                              <button className="how-itemcart1">
                                <img src={item.image} alt="IMG" />
                              </button>
                            </td>
                            <td className="column-2">{item.title}</td>
                            <td className="column-3">$ {item.price}</td>
                            <td className="column-4">
                              <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                <button className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                  <i className="fs-16 zmdi zmdi-minus"></i>
                                </button>

                                <input
                                  className="mtext-104 cl3 txt-center num-product"
                                  type="number"
                                  name="num-product2"
                                  value={qty}
                                />

                                <button className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                  <i className="fs-16 zmdi zmdi-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="column-5">${total}</td>
                          </tr>
                        ))
                      : "There is no item in the basket"}
                  </table>
                </div>
              </div>
            </div>
            <Subtotal />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
