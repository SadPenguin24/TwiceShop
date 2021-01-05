import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div className="slider">
      <div className="wrap-slick1">
        <div className="slick1">
          <div
            className="item-slick1"
            style={{ backgroundImage: "url(/images/slide-01.jpg)" }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon 5">
                <div className="layer-slick1 animated fadeInDown">
                  <span className="ltext-101 cl2 respon2 t-white">
                    Album Set
                  </span>
                </div>
                <div className="layer-slick1 animated fadeInUp delay-800">
                  <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1 t-white">
                    More & More
                  </h2>
                </div>
                <div className="layer-slick1 animated zoomIn delay-1600">
                  <span className="flex-c-m stext-101 c10 size101 bg1 bor1 hov-btn1 p-lr-15 trans-04 btn-size">
                    Shop Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
