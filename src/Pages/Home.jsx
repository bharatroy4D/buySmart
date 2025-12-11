import React from 'react';
import Banner from './Home/banner/Banner';
import TopDeals from '../Components/TopDeals/TopDeals';
import Products from './Home/Products/Products';
import DiscountBanner from './Home/DiscountBanner/DiscountBanner';

const Home = () => {
    return (
        <div className='bg-'>
            <Banner />
            <TopDeals />
            <Products />
            <DiscountBanner />
        </div>
    );
};

export default Home;