import React from 'react';
import SideBar from './SideBar';
import MainProducts from './MainProducts';

const Products = () => {
    return (
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row gap-8">
            <SideBar />
            <MainProducts />
        </div>
    );
};

export default Products;
