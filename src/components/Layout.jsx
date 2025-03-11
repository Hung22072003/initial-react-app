import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className="flex h-screen w-screen overflow-y-scroll">
            <SideBar />
            <div className="flex-1">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
