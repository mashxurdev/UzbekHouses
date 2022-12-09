import React from "react";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const BtnSlider = ({ direction, moveSlide }) => {
  if (direction === "prev") {
    return (
      <div className="arrow-left" onClick={moveSlide}>
        <TfiAngleLeft />
      </div>
    );
  } else if (direction === "next") {
    return (
      <div className="arrow-right" onClick={moveSlide}>
        <TfiAngleRight />
      </div>
    );
  }
};

export default BtnSlider;
