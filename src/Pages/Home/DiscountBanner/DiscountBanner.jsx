import React from 'react';
import discount from '../../../assets/banner_img/Yellow and White Modern Illustrative Cyber Monday Sale Banner.png'

const DiscountBanner = () => {
    return (
        <div className='container px-5 mx-auto pb-7'>
            <img src={discount} alt="discountBanner" className='rounded-2xl shadow h-70 w-full' />
        </div>
    );
};

export default DiscountBanner;