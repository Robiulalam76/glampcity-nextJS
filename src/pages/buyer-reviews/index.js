import Link from 'next/link';
import React from 'react';

const BuyerReviewMain = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex items-center gap-8 mt-16'>
                    <Link href='/product-details' className='flex justify-center items-center w-56 h-14 border border-primary'>
                        <span className='text-md text-primary'>Product details</span>
                    </Link>
                    <Link href='/company-profile' className='flex justify-center items-center w-56 h-14 border border-primary'>
                        <span className='text-md text-primary'>Company profile</span>
                    </Link>
                    <Link href='/buyer-reviews' className='flex justify-center items-center w-56 h-14  bg-primary'>
                        <span className='text-md text-white'>Buyer Reviews</span>
                    </Link>
                </div>
                <hr className='my-6' />
            </div>
        </section>
    );
};

export default BuyerReviewMain;