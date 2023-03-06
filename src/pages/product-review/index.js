import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import '../../app/globals.css'

const Product = ({ children }) => {
    const location = useRouter()
    return (
        <section>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <ProductReview />
                    <div className='flex items-center gap-8 mt-16'>
                        <Link href='/product-details' className='flex justify-center items-center w-56 h-14 bg-primary'>
                            <span className='text-md text-white'>Product details</span>
                        </Link>
                        <Link href='/company-profile' className='flex justify-center items-center w-56 h-14 border border-primary'>
                            <span className='text-md text-primary'>Company profile</span>
                        </Link>
                        <Link href='/buyer-reviews' className='flex justify-center items-center w-56 h-14  border border-primary'>
                            <span className='text-md text-primary'>Buyer Reviews</span>
                        </Link>
                    </div>
                    <hr className='my-6' />
                    <main>
                        {children}
                        {
                            location.asPath === "/product-review" && <ProductDetails />
                        }

                    </main>
                </div>
            </div>
        </section >
    );
};

export default Product;