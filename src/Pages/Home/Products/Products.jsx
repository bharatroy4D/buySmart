import React from 'react';
import SideBar from './SideBar';
import MainProducts from './MainProducts';

const Products = () => {
    return (
        <div className='container flex gap-10 px-5 py-6 mx-auto w-full '>
            <SideBar />
            <MainProducts />
        </div>
    );
};

export default Products;