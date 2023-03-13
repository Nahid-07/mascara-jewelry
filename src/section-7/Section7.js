import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import boxRing from "../recources/img/boxRing.jpg"

const Section7 = () => {
  return (
    <section className="p-12">
      <div className="max-w-7xl mx-auto md:flex justify-center items-center gap-10">
      <div className="text-center" data-aos="zoom-in">
        <h3 className="text-2xl">FROM OUR GUESTS</h3>
        <div className="flex mt-5 justify-center">
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
          <StarIcon className="h-6 w-6" />
        </div>
        <p className="text-xl my-5">
          ordered this necklace with my daughter’s initial on it to commemorate
          her birth. i haven’t taken it off since - it’s perfect
        </p>
        <p className="text-xl mb-5">Cristine S.</p>
        <h2 className="text-xl">SHOP LITTLE LOVELY NECKLACE</h2>
      </div>
      <div className="mt-7 md:mt-0" data-aos="zoom-in-up">
            <img src={boxRing} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Section7;
