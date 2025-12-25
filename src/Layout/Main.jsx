import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;