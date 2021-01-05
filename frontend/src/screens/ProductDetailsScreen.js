import React from "react";
import Navi from "../components/Navi.js";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.js";
import ProductDetails from "../components/ProductDetails.js";

function ProductDetailsScreen({ history, match }) {
  return (
    <>
      <Navi isHome={false} />
      <ProductDetails match={match} history={history} />
    </>
  );
}

export default ProductDetailsScreen;
