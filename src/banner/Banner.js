import React from 'react';
import banner from "../recources/img/bannerIMG.jpg"
import './Banner.css'

const Banner = () => {
    return (
       <div className='backgroundimg'>
        <img className='bannerIMG' src={banner} alt="" />
        <div className='absolute md:right-20 md:top-96 text-white top-[70%] right-[5%] px-2'>
            <h1 className='md:text-4xl text-2xl'>GIVE YOURSELF A SPECIAL TOUCH</h1>
            <button className='md:text-2xl md:mt-9 border md:px-10 py-2 px-2 mt-4'>SHOP SPECIAL LOVELY NECKLACE</button>
        </div>
       </div>
    );
};

export default Banner;