import React from 'react';
import discount from '../../../assets/banner_img/Frame 600.png'

const DiscountBanner = () => {
    return (
        <div className='container px-5 mx-auto pb-7'>
            <img src={discount} alt="discountBanner" className='rounded-2xl shadow h-40 md:h-96 w-full' />
        </div>
    );
};

export default DiscountBanner;