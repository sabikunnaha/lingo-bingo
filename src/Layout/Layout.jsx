import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
           <div className='h-16'>
             <Header></Header>
           </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;