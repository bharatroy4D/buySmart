import React from 'react';
import Banner from './banner/Banner';
import TopDeals from '../../Components/TopDeals/TopDeals';

const Home = () => {
    return (
        <div className='bg-'>
            <Banner />
            <TopDeals />
        </div>
    );
};

export default Home;