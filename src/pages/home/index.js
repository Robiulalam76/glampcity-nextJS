import CountryOrRegion from '@/components/HomeComponents/CountryOrRegion/CountryOrRegion';
import FutureProducts from '@/components/HomeComponents/FutureProducts/FutureProducts';
import LatestProducts from '@/components/HomeComponents/LatestProducts/LatestProducts';
import NewArrival from '@/components/HomeComponents/NewArrival/NewArrival';
import ProductRequirements from '@/components/HomeComponents/ProductRequirements/ProductRequirements';
import TopRanking from '@/components/HomeComponents/TopRanking/TopRanking';
import TradeServices from '@/components/HomeComponents/TradeServices/TradeServices';
import React from 'react';
import Banner from '../../components/HomeComponents/Banner/Banner'

const index = () => {
    return (
        <section className=''>
            <div className='bg-[#faf8f8]'>
                <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                    <Banner />
                    <section className='grid md:grid-cols-2 gap-4 mt-16'>
                        <NewArrival />
                        <TopRanking />
                    </section>
                    <LatestProducts />
                    <FutureProducts />
                    <CountryOrRegion />
                    <TradeServices />
                    <ProductRequirements />
                </div>
            </div>

        </section>
    );
};

export default index; 