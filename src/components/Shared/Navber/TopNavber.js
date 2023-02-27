'use client';
import { useEffect, useRef, useState } from 'react';
import usa from '../../../assets/icons/navber-icons/usa.png'
import downArrow from '../../../assets/icons/navber-icons/down-arrow.png'
import Link from 'next/link';
import CountryDropdown from '@/components/Dropdowns/NavberDropdowns/CountryDropdown';
const TopNavber = () => {
    const [countryDropdown, setCountryDropdown] = useState(false)
    const [showRoutes, setShowRoutes] = useState(false)
    const closeDropdown = () => {
        setCountryDropdown(false)
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setShowRoutes(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <nav className='bg-[#E5EAFF57] cursor-pointer'>
            <div className='flex justify-end items-center gap-8 max-w-[1440px] mx-auto px-4 h-14'>

                <div className=''>
                    <button onClick={() => setShowRoutes(!showRoutes)} className='bg-primary text-white py-2 px-2'>Routes</button>
                    {
                        showRoutes && <div ref={dropdownRef} class="absolute md:right-60 z-50 w-fit rounded bg-gray-50 shadow shadow-gray-400 border grid grid-cols-1">
                            <Link href='/company-profile' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>Company Profile</Link>
                            <Link href='/messages' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>messages</Link>
                            <Link href='/shopping-carts' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>shopping carts</Link>
                            <Link href='/product-view' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>product view</Link>
                            <Link href='/answare-to-next' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>answare-to-next</Link>
                            <Link href='/buyer' className='bg-gray-200 py-2 px-3 hover:bg-primary hover:text-white text-left'>buyer</Link>
                        </div>
                    }
                </div>

                <Link href='/help-center' className='text-sm text-gray-500'>Help Center</Link>
                <Link href='/contact' className='text-sm text-gray-500'>Contact Us</Link>
                <div className='relative'>
                    <div onClick={() => setCountryDropdown(!countryDropdown)}
                        className='relative flex justify-between items-center gap-3'>
                        <img className='w-8' src={usa} alt="" />
                        <h1 className='text-sm text-gray-500'>USA $</h1>
                        <img className='w-4' src={downArrow} alt="" />
                    </div>
                    {
                        countryDropdown && <CountryDropdown closeDropdown={closeDropdown} />
                    }
                </div>
            </div>
        </nav>
    );
};

export default TopNavber;