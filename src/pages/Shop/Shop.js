import React from "react";
import { Link } from "react-router-dom";
import {GiJewelCrown,GiLovers,GiDoubleNecklace,GiDoorRingHandle,GiCloudRing,GiGemChain} from 'react-icons/gi'


const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 py-20">
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiJewelCrown className="w-40 h-40 "></GiJewelCrown>
                <h3 className="text-2xl">All Collections</h3>
            </div>
        </Link>
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiLovers className="w-40 h-40 "></GiLovers>
                <h3 className="text-2xl">Valentine Collections</h3>
            </div>
        </Link>
        <Link>
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
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiCloudRing className="w-40 h-40 "></GiCloudRing>
                <h3 className="text-2xl">bracelet Collections</h3>
            </div>
        </Link>
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiGemChain className="w-40 h-40 "></GiGemChain>
                <h3 className="text-2xl">All Collections</h3>
            </div>
        </Link>
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiJewelCrown className="w-40 h-40 "></GiJewelCrown>
                <h3 className="text-2xl">All Collections</h3>
            </div>
        </Link>
        <Link>
            <div className="flex flex-col py-10 border-black border-4 rounded-md items-center">
                <GiJewelCrown className="w-40 h-40 "></GiJewelCrown>
                <h3 className="text-2xl">All Collections</h3>
            </div>
        </Link>
        
    </div>
  );
};

export default Shop;
