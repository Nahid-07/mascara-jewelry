import React from 'react';
import layer15 from "../recources/img/Layer 15.png"
import layer16 from "../recources/img/Layer 16.png"
import layer17 from "../recources/img/Layer 17.png"
import layer14 from "../recources/img/Layer 14.png"

const Section8 = () => {
    return (
        <section className='bg-[#f7f1e3] p-12'>
            <div className='grid max-w-7xl mx-auto md:grid-cols-4 justify-items-center gap-6'>
                <img src={layer14} alt="" />
                <img src={layer15} alt="" />
                <img src={layer16} alt="" />
                <img src={layer17} alt="" />
            </div>
        </section>
    );
};

export default Section8;