'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import arrow from '../../../assets/icons/banner-icons/right-arrow.png'
import AllCategoriesModal from '../../Modals/CategoriesModals/AllCategoriesModal';

const categories = [
    {
        id: '1',
        name: 'Accessories',
        sub_categories: [
            'Accessories 1',
            'Accessories 1',
            'Accessories 1',
            'Accessories 1',
            'Accessories 1',
            'Accessories 1'
        ]
    },
    {
        id: '2',
        name: 'Consultants',
        sub_categories: [
            'Consultants 2',
            'Consultants 2',
            'Consultants 2',
            'Consultants 2',
            'Consultants 2',
            'Consultants 2'
        ]
    },
    {
        id: '3',
        name: 'Business',
        sub_categories: [
            'Business 3',
            'Business 3',
            'Business 3',
            'Business 3',
            'Business 3',
            'Business 3'
        ]
    },
    {
        id: '4',
        name: 'Financial Services',
        sub_categories: [
            'Financial Services 4',
            'Financial Services 4',
            'Financial Services 4',
            'Financial Services 4',
            'Financial Services 4',
            'Financial Services 4'
        ]
    },
    {
        id: '5',
        name: 'Energy & Renewable',
        sub_categories: [
            'Energy & Renewable 5',
            'Energy & Renewable 5',
            'Energy & Renewable 5',
            'Energy & Renewable 5',
            'Energy & Renewable 5',
            'Energy & Renewable 5'
        ]
    },
    {
        id: '6',
        name: 'Lights & Lighting',
        sub_categories: [
            'Lights & Lighting 6',
            'Lights & Lighting 6',
            'Lights & Lighting 6',
            'Lights & Lighting 6',
            'Lights & Lighting 6',
            'Lights & Lighting 6'
        ]
    },
    {
        id: '7',
        name: 'Automobiles & Motorcycles',
        sub_categories: [
            'Automobiles & Motorcycles 7',
            'Automobiles & Motorcycles 7',
            'Automobiles & Motorcycles 7',
            'Automobiles & Motorcycles 7',
            'Automobiles & Motorcycles 7',
            'Automobiles & Motorcycles 7'
        ]
    },
    {
        id: '8',
        name: 'Automobiles & Motorcycles',
        sub_categories: [
            'Automobiles & Motorcycles 8',
            'Automobiles & Motorcycles 8',
            'Automobiles & Motorcycles 8',
            'Automobiles & Motorcycles 8',
            'Automobiles & Motorcycles 8',
            'Automobiles & Motorcycles 8'
        ]
    },
    {
        id: '9',
        name: 'Books',
        sub_categories: [
            'Books 9',
            'Books 9',
            'Books 9',
            'Books 9',
            'Books 9',
            'Books 9'
        ]
    },
    {
        id: '10',
        name: 'Motorcycles',
        sub_categories: [
            'Automobiles 10',
            'Automobiles 10',
            'Automobiles 10',
            'Automobiles 10',
            'Automobiles 10',
            'Automobiles 10'
        ]
    }
]

const Categories = () => {
    const [allCategories, setAllCategories] = useState(null)

    return (
        <div className='lg:col-span-1 cursor-pointer relative'>
            <div>
                <div className='bg-primary h-12 w-full flex justify-center items-center text-white'>
                    <h1 className='font-bold'>Browse Categories</h1>
                </div>
                {
                    categories.slice(0, 7).map(category => <button
                        className="group w-full relative">
                        <Link href={`/categories/${category.name}`} className=' hover:bg-gray-300 border-b border-x h-12 w-full flex justify-between items-center px-3 text-gray-900'>
                            <h1 className='font-semibold'>{category.name}</h1>
                            <Image className="w-2" src={arrow} alt="" />
                        </Link>

                        <div className='hidden group-focus:block group-hover:block z-50 absolute -right-10 bg-white w-full border-t-8 border-t-primary border-b border-x h-60 overflow-y-auto'>
                            {
                                category.sub_categories.map(subCTG => <Link href={`/categories/${category.name}/${subCTG}`}
                                    className='hover:bg-gray-300 border-b border-x h-12 w-full flex items-center px-3 text-gray-900'>
                                    <h1 className='font-semibold'>{subCTG}</h1>
                                </Link>)
                            }
                        </div>
                    </button>)
                }


                <div onClick={() => setAllCategories(categories)} className='bg-primary h-12 w-full flex justify-center items-center text-white'>
                    <h1 className='font-bold'>View all categories</h1>
                </div>

                {
                    allCategories && <AllCategoriesModal allCategories={allCategories}
                        closeModal={setAllCategories} />
                }
            </div>
        </div>
    );
};

export default Categories;