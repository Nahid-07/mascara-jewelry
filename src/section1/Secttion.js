import React from "react";
import ring from "../recources/img/ring.jpg";
import ring2 from "../recources/img/ring2.jpg";
import ear from "../recources/img/ear.jpg";
import bracelet from "../recources/img/bracelet (1).webp";
import neck from "../recources/img/neck.webp";

const Secttion = () => {
  return (
    <div className="bg-[#f7f1e3] p-12 w-[100vw]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h4 className="md:text-3xl text-xl text-center">
            Here at mascara, we design jewelry for you & also for your beloved
            one.
          </h4>
          <h4 className="md:text-3xl text-xl text-center">
            {" "}
            See everything we make below.
          </h4>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10 place-content-center">
          <div className="w-[223px] h-[300px]">
            <img className="h-full" src={neck} alt="" />
            <p className="mt-3 text-lg">
              <a href="#">SHOP NECKLACES</a>
            </p>
          </div>
          <div className="w-[223px] h-[300px]">
            <img className="h-full" src={ring} alt="" />
            <p className="mt-3 text-lg">
              <a href="#">SHOP NECKLACES</a>
            </p>
          </div>
          <div className="w-[223px] h-[300px]">
            <img className="h-full" src={ring2} alt="" />
            <p className="mt-3 text-lg">
              <a href="#">SHOP NECKLACES</a>
            </p>
          </div>
          <div className="w-[223px] h-[300px]">
            <img className="h-full" src={bracelet} alt="" />
            <p className="mt-3 text-lg">
              <a href="#">SHOP NECKLACES</a>
            </p>
          </div>
          <div className="w-[223px] h-[300px]">
            <img className="h-full" src={ear} alt="" />
            <p className="mt-3 text-lg">
              <a href="#">SHOP NECKLACES</a>
            </p>
          </div>
        
        </div>
      </div>
      <div className="flex justify-center mt-20">
          <button className="w-[300px] bg-[#7a6b47] py-5 text-white text-xl">EXPLORE MORE</button>
        </div>
    </div>
  );
};

export default Secttion;
