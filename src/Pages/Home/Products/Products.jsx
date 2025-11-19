import React, { useState } from 'react';
import SideBar from './SideBar';
import MainProducts from './MainProducts';

const Products = () => {
      const [category, setCategory] = useState("All Categories");

    return (
        <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row gap-8">
            <SideBar category={category} setCategory={setCategory} />
            <MainProducts category={category} />
        </div>
    );
};

export default Products;
