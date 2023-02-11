import React from "react";
import couple from "../recources/img/Pandora-disney-valentines-day-2022-model-3.jpg";

const Section5 = () => {
  return (
    <div className="bg-[#f7f1e3] py-4 lg:py-0">
      <section className="max-w-7xl mx-auto px-12 md:flex gap-10 justify-center items-center">
        <div className="w-[100%] md:w-[50%]">
          <img src={couple} alt="" />
        </div>
        <div className="w-[100%] md:w-[50%] mt-4 md:mt-0">
          <h4 className="lg:text-2xl md:text-xl">The Special Choice.</h4>
          <h1 className="lg:text-3xl md:text-2xl text-[#846315] lg:my-5 md:my-3">
            Valentine Special Jewelry
          </h1>
          <p className="lg:text-2xl md:text-xl">
            The approach of Valentine’s Day can be nerve-racking for the
            jewelry-gifting novice. If you think it’s time you bestow a special
            Valentine’s Day jewelry gift upon your sweetheart, it probably is.
            Make us a part of your sweet journey of love.
          </p>
          <button className="w-[100%] lg:w-[350px] bg-[#7a6b47] py-4 mt-5 text-white">
            SHOP VALENTINE COLLECTION
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section5;
