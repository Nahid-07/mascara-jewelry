import React from "react";
import sale from "../recources/img/sale.jpg";
const Section2 = () => {
  return (
    <div className="max-w-7xl p-12 mx-auto overflow-y-hidden my-10">
      <div className="md:flex gap-10 justify-center items-center">
        <div className="md:w-[50%]">
          <img
            className="rounded-full lg:w-[520px] lg:h-[522px] -rotate-45"
            src={sale}
            alt=""
          />
        </div>
        <div className="md:w-[50%] text-4xl italic text-emerald-800">
          <p>Let”s celebrate this winter together.</p>
          <p>
            Get up to 30% discount on your desire jewelry for a limited time.
          </p>
          <p>Grab the opportunity.</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
