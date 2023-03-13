import Image from 'next/image';
import React from 'react';
import img from '../../../assets/images/future-products-images/img1.png'
import profile from '../../../assets/images/future-products-images/img.png'
import img1 from '../../../assets/images/new-arrival-images/img1.png'
import img3 from '../../../assets/images/new-arrival-images/img3.png'
import img4 from '../../../assets/images/new-arrival-images/img4.png'
import img5 from '../../../assets/images/new-arrival-images/img5.png'
import ProductCard from '../../ProductCards/ProductCard';

const products = [
    { id: '1556', img: img1, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '2df', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '3f44fdsf', img: img3, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '4d4f4s', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '5d4f4f', img: img5, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: '64fd4', img: img4, title: 'Nike Shoes - Men', price: '3, 999', description: 'Lorem ipsum dolor sit amet consectetur.' },
]

const FutureProducts = () => {
    return (
        <section className='mt-32 cursor-pointer'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5'>Featured Products from <strong>Verified Suppliers</strong></h1>
            <div className='mt-16 md:mt-28'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex justify-center items-center mx-auto rounded-full border-[12px] md:border-[20px] border-gray-400 relative'>
                        <Image className='w-32 md:w-60 h-32 md:h-60 rounded-full border-[8px] md:border-[14px] border-white' src={profile} alt="" />
                        <div className='absolute w-[124px] md:w-56 h-8 md:h-10 bg-white flex justify-center items-center'>
                            <span className='text-black font-semibold text-sm'>Tuhfa Collection</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-primary h-14 md:w-60 mt-20 mx-auto'>
                    <button className='text-white font-semibold'>View More</button>
                </div>
            </div>

            <div className='mt-16'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                    <div className='relative col-span-2 rounded-xl bg-[#FF9F46] mt-6'>
                        <div className='px-6 mt-3'>
                            <h1 className='font-bold text-white text-2xl text-center md:text-left '>The Most <br /> Popular Products</h1>
                            <div className='w-36 h-9 mx-auto md:mx-0 bg-white rounded-[50px] flex justify-center items-center mt-2'>
                                <button className='text-[#FFA048] font-semibold'>View More</button>
                            </div>

                            <h1 className='text-white text-xl text-center md:text-left mt-2'>Upto</h1>
                            <h1 className='text-white font-bold text-5xl text-center md:text-left'>10%</h1>
                            <h1 className='text-white text-xl my-2 text-center'>Rebate</h1>
                        </div>

                    </div>
                    {
                        products.map((product, i) => <ProductCard key={i} product={product} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default FutureProducts;