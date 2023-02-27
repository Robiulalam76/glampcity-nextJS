import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import { SidebarContext } from '../../../ContextAPI/SidebarProvider';

const WishlistDrawer = () => {
    const { wishlistDrawerOpen, setWishlistDrawerOpen } = useContext(SidebarContext)
    return (
        <Drawer
            placement='right'
            visible={wishlistDrawerOpen}
            title='Wishlist Products'
            closable={true}
            width='380px'
            onClose={() => setWishlistDrawerOpen(false)}
        >
        </Drawer>
    );
};

export default WishlistDrawer;