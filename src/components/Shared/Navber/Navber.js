'use client';
import { useEffect, useRef, useState } from 'react';
import logo from '../../../assets/logo/logo.png'
import love from '../../../assets/icons/navber-icons/love.png'
import cart from '../../../assets/icons/navber-icons/cart.png'
import Link from 'next/link';
import Image from 'next/image';
import { setOpenAddCartItemsSidebar, setOpenWishlistSidebar } from '@/Slices/controllerSlice';
import { useDispatch, useSelector } from 'react-redux';
import WishlistDrawer from '@/components/Drawers/WishlistDrawers/WishlistDrawer';
import AddCartItemsDrawer from '@/components/Drawers/AddCartItemsDrawer/AddCartItemsDrawer';
const Navber = () => {
    const { wishlistItems, cartItems } = useSelector((state) => state.controllerSlice)
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    let navberRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!navberRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <nav ref={navberRef} className='bg-white py-4 uppercase border-b'>
            <div className='relative cursor-pointer flex justify-between items-center gap-6 lg:gap-10 h-14 px-4 md:px-8 max-w-[1440px] mx-auto'>
                <div className='flex-grow'>
                    <Link href='/'><Image className='w-10 md:w-16' src={logo} alt="navberImage" /></Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/home' className='text-black font-semibold'>Home</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/how-it-works' className='text-black font-semibold'>How it works</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/about-us' className='text-black font-semibold'>About Us</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/contact' className='text-black font-semibold'>Contact</Link>
                </div>
                <div className='hidden lg:block'>
                    <Link href='/faq' className='text-black font-semibold'>FAQ</Link>
                </div>
                <div className='flex justify-between items-center gap-6'>
                    <div onClick={() => dispatch(setOpenWishlistSidebar(true))} >
                        <div className='relative'>
                            <Image className='w-5' src={love} alt="navberImage" />
                            <div className='absolute -right-2 -top-3 h-4 w-4 bg-rose-600 rounded-full flex justify-center items-center'>
                                <span className='text-white p-1'>
                                    {wishlistItems ? wishlistItems.length : 0}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => dispatch(setOpenAddCartItemsSidebar(true))}>
                        <div className='relative'>
                            <Image className='w-5' src={cart} alt="navberImage" />
                            <div className='absolute -right-2 -top-3 h-4 w-4 bg-rose-600 rounded-full flex justify-center items-center'>
                                <span className='text-white p-1'>
                                    {cartItems ? cartItems.length : 0}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block lg:flex justify-between items-center gap-6'>
                    <Link href='/login' className='w-36 h-10 bg-[#0029FF] flex justify-center items-center rounded'>
                        <h1 className='text-white font-semibold'>LOG IN</h1>
                    </Link>
                    <Link href='/register' className='w-36 h-10 border border-[#0029FF] flex justify-center items-center rounded'>
                        <h1 className='text-[#0029FF] font-semibold'>REGISTER</h1>
                    </Link>
                </div>
                {/* -----------toggler button----------- */}
                <div onClick={() => setOpen(!open)} className="w-10 lg:hidden text-blue-600">
                    {
                        open ? <span>
                            <svg className='w-8 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 ml-2 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </div>
                {/* -----------toggler button end----------- */}

            </div>
            <div className={`absolute z-50 duration-300 border-r mt-[17px] lg:hidden flex flex-col items-start w-72 min-h-screen bg-white px-4 py-4
            ${open ? 'left-0' : '-left-[300px]'}`}>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link href='/home' className='text-black font-semibold hover:text-white w-full py-2'>Home</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link href='/how-it-works' className='text-black font-semibold hover:text-white w-full py-2'>How it works</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link href='/about-us' className='text-black font-semibold hover:text-white w-full py-2'>About Us</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link href='/contact' className='text-black font-semibold hover:text-white w-full py-2'>Contact</Link>
                </div>
                <div className='lg:hidden w-full flex items-center px-2 text-left hover:bg-[#0029FF]'>
                    <Link href='/faq' className='text-black font-semibold hover:text-white w-full py-2'>FAQ</Link>
                </div>
                <div className='lg:hidden flex items-center gap-6 mt-4'>
                    <Link href='/login' className='w-24 h-8 bg-[#0029FF] flex justify-center items-center rounded'>
                        <h1 className='text-white font-semibold'>LOG IN</h1>
                    </Link>
                    <Link href='/register' className='w-24 h-8 border border-[#0029FF] flex justify-center items-center rounded'>
                        <h1 className='text-[#0029FF] font-semibold'>REGISTER</h1>
                    </Link>
                </div>
            </div>

            <AddCartItemsDrawer />
            <WishlistDrawer />
        </nav>
    );
};

export default Navber;