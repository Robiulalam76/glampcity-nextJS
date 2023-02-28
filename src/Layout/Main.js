import React from 'react';
import Navber from '@/components/Shared/Navber/Navber';
import Footer from '@/components/shared/Footer/Footer';
import TopNavber from '@/components/Shared/Navber/TopNavber';


const Main = ({ components, children }) => {
    return (
        <>
            <TopNavber />
            <Navber />
            <main>{components, children}</main>
            <Footer />
        </>
    );
};

export default Main;