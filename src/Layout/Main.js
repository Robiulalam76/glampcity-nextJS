import React from 'react';
import Navber from '@/components/Shared/Navber/Navber';
import TopNavber from '@/components/Shared/Navber/TopNavber';
import { Provider } from 'react-redux';
import store from '@/store';


const Main = ({ components, children }) => {

    return (
        <>
            <Provider store={store}>
                <TopNavber />
                <Navber />
                <main>{components, children}</main>
                {/* <Footer /> */}
            </Provider>
        </>
    );
};

export default Main;