import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";

function Subtotal({ subtotal }) {
  return (
    <div className="subtotal col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
      <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
        <h4 className="mtext-109 cl2 p-b-30">Cart Totals</h4>

        <div className="flex-w flex-t bor12 p-b-13">
          <div className="size-208">
            <span className="stext-110 cl2"> Subtotal: </span>
          </div>

          <div className="size-209">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <span className="mtext-110 cl2"> {value} </span>
                </>
              )}
              decimalScale={2}
              value={subtotal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </div>
        <Link to="/shipping">
          <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Subtotal;
