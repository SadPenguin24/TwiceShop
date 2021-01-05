import React from "react";

import Navi from "../components/Navi.js";
import Footer from "../components/Footer";

import Slider from "../components/Slider";
import ProductOverview from "../components/ProductOverview.js";

function HomeScreen() {
  return (
    <>
      <Navi isHome={true} />
      <Slider />
      <ProductOverview />
    </>
  );
}

export default HomeScreen;
