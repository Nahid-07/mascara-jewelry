import React, { useEffect, useState } from "react";
import Speener from "../component/Speener";
const Secttion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mascara-jwellary-server-nahid-07.vercel.app/displayProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      });
  }, []);
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
        { loading ? <Speener></Speener> :
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10 place-content-center">
          {products.map((product) => (
            <div className="w-[100%] md:w-[223px] h-[300px] cursor-pointer" data-aos="fade-up">
              <img className="h-full" src={product.image} alt="" />
              <p className="mt-3 text-lg">
                <a href="#">{product.productName}</a>
              </p>
            </div>
          ))}
        </div>
        }
      </div>
      <div className="flex justify-center mt-20">
        <button className="w-[300px] bg-[#7a6b47] py-5 text-white text-sm md:text-lg">
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Secttion;
