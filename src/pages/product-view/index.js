import ProductDetails from '@/components/Product-View-Components/ProductDetails';
import ProductReview from '@/components/Product-View-Components/ProductReview';
import ProductSubmit from '@/components/Product-View-Components/ProductSubmit';
import React from 'react';
import '../../app/globals.css'

const ProductView = () => {
    return (
        <section>
            <div className='bg-white'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <ProductReview />
                    <ProductDetails />
                    <ProductSubmit />
                </div>
            </div>
        </section>
    );
};

export default ProductView;