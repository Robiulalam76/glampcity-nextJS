import React, { useContext, useState } from 'react';
import { Drawer } from 'antd';
import { SidebarContext } from '../../../ContextAPI/SidebarProvider';
import Image from 'next/image';

const AddCartItemsDrawer = () => {
    const { addCartItemsDrawerOpen, setAddCartItemsDrawerOpen, addCartItems } = useContext(SidebarContext)
    return (
        <Drawer
            placement='right'
            visible={addCartItemsDrawerOpen}
            title='Cart Items'
            closable={true}
            width='380px'
            onClose={() => setAddCartItemsDrawerOpen(false)}
        >

            <div className="pointer-events-auto w-full">
                <div className="flex h-full flex-col overflow-y-auto">
                    <div className="flex-1 overflow-y-auto py-6">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {addCartItems.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                            src={product.img}
                                            alt=''
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href={product.href}>{product.title}</a>
                                                </h3>
                                                <p className="ml-4">{product.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">blue</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">Qty 1</p>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-gray-200 py-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                                Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </Drawer>
    );
};

export default AddCartItemsDrawer;