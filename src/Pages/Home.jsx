import React from 'react';
import Banner from './Home/banner/Banner';
import TopDeals from '../Components/TopDeals/TopDeals';
import Products from './Home/Products/Products';

const Home = () => {
    return (
        <div className='bg-'>
            <Banner />
            <TopDeals />
            <Products />
        </div>
    );
};

export default Home;