import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import ProductCheckout from "../components/ProductCheckout.js";
import Subtotal from "../components/Subtotal.js";

import Navi from "../components/Navi.js";

function CartScreen({ match, location }) {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id, e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Navi isHome={false} />
      <div className="checkout">
        <form class="bg0 p-t-130 p-b-85">
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
                                <button
                                  className="how-itemcart1"
                                  onClick={(e) =>
                                    removeFromCartHandler(item.product, e)
                                  }
                                >
                                  <img src={item.image} alt="IMG" />
                                </button>
                              </td>
                              <td className="column-2">
                                <Link to={`/product/${item.product}`}>
                                  {item.title}
                                </Link>
                              </td>
                              <td className="column-3">$ {item.price}</td>
                              <td className="column-4">
                                <span className="mtext-104 m-auto">
                                  {item.qty}
                                </span>
                              </td>
                              <td className="column-5">
                                ${(item.qty * item.price).toFixed(2)}
                              </td>
                            </tr>
                          ))
                        : "There is no item in the basket"}
                    </table>
                  </div>
                </div>
              </div>
              <Subtotal
                subtotal={cartItems.reduce(
                  (acc, item) => acc + item.qty * item.price,
                  0
                )}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CartScreen;
