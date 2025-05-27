import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar/Navbar';
import Footer from '../Components/Common/Footer/Footer';

const Mainlayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white text-black ">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
