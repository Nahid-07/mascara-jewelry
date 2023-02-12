import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./section9.css";

const Section9 = () => {
  return (
    <section className="grid lg:grid-cols-3">
      <div className="bg flex justify-center items-center">
        <BsInstagram  className="h-12 w-12 text-white"/>
      </div>
      <div className="bg-1 flex justify-center items-center">
        <CiFacebook className="h-12 w-12 text-white"/>
      </div>
      <div className="bg-2 flex justify-center items-center">
        <AiFillTwitterCircle  className="h-12 w-12 text-white"/>
      </div>
    </section>
  );
};

export default Section9;
