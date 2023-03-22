import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  GiJewelCrown,
  GiLovers,
  GiDoubleNecklace,
  GiDoorRingHandle,
  GiCloudRing,
  GiGemChain,
} from "react-icons/gi";
import {BiGridSmall} from "react-icons/bi"

const Shop = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-10 gap-6 lg:py-20">
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <BiGridSmall className="w-40 h-40 "></BiGridSmall>
            <h3 className="text-2xl">All Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiLovers className="w-40 h-40 "></GiLovers>
            <h3 className="text-2xl">Valentine Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiDoubleNecklace className="w-40 h-40 "></GiDoubleNecklace>
            <h3 className="text-2xl">Necklace Collections</h3>
          </div>
        </Link>
        <Link>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiDoorRingHandle className="w-40 h-40 "></GiDoorRingHandle>
            <h3 className="text-2xl">Ring Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiCloudRing className="w-40 h-40 "></GiCloudRing>
            <h3 className="text-2xl">bracelet Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiGemChain className="w-40 h-40 "></GiGemChain>
            <h3 className="text-2xl">Pendant Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiJewelCrown className="w-40 h-40 "></GiJewelCrown>
            <h3 className="text-2xl">Choker Collections</h3>
          </div>
        </Link>
        <Link to='/coming-soon'>
          <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
            <GiJewelCrown className="w-40 h-40 "></GiJewelCrown>
            <h3 className="text-2xl">Tiara Collections</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Shop;
