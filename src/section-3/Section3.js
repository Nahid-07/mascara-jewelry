import React from "react";
import flawless from "../recources/img/flawless_by_zareen.jpg";

const Section3 = () => {
  return (
    <div className="bg-[#f7f1e3] py-4 lg:py-0 lg-py-0">
      <section className="max-w-7xl mx-auto md:flex justify-center items-center px-12">
        <article className="md:w-[50%] mb-6 lg:mb-0">
          <h5 className="text-lg md:text-xl lg:text-2xl">The Special Choice.</h5>
          <h3 className="lg:text-4xl md:text-3xl text-xl text-[#846315] my-8">Bridal Special Jewelry</h3>
          <p className="tetx-2xl">
            From choosing your perfect engagement ring and wedding band to
            picking your jewels for the big day, browse our how-to guides, brush
            up on your diamond knowledge and meet the designers who are making
            dreams come true
          </p>
        </article>
        <div className="md:w-[50%] border-8">
          <img className="h-full" src={flawless} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Section3;
