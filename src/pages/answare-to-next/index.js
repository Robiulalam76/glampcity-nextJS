import CategoriesSub from '@/components/answareToNextComponents/CategoriesSub';
import DescribeYourBusiness from '@/components/answareToNextComponents/DescribeYourBusiness';
import Supplier from '@/components/answareToNextComponents/Supplier';
import Link from 'next/link';
import { useState } from 'react';
import '../../app/globals.css'

const AnswareToNext = () => {
    const [allData, setAllData] = useState(null)
    const [next, setNext] = useState(1)

    const nextIncrease = (num) => {
        setNext(num)
    }

    const handleData = (data) => {
        console.log(data);
    }
    return (
        <section className='bg-white min-h-screen'>
            <div className='max-w-[1440px] mx-auto px-3 md:px-8'>
                {
                    next === 1 && < DescribeYourBusiness nextIncrease={nextIncrease} handleData={handleData} />
                }
                {
                    next === 2 && < CategoriesSub nextIncrease={nextIncrease} handleData={handleData} />
                }
                {
                    next === 3 && <div className='max-w-[800px] mx-auto py-16'>
                        <h1 className='text-center font-semibold text-black text-2xl px-4'>We can finish here or i have some bonus questions which
                            will help you to give more specific information.</h1>
                        <div className='flex items-center gap-4 w-fit mx-auto px-6 md:px-12 mt-8'>
                            <Link href='/' type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-white border border-primary text-primary font-bold'>
                                <h1>Skip</h1>
                            </Link>
                            <button onClick={() => nextIncrease(4)} type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                                <h1>Next</h1>
                            </button>
                        </div>
                    </div>
                }
                {
                    next === 4 && <Supplier nextIncrease={nextIncrease} handleData={handleData} />
                }
            </div>
        </section>
    );
};

export default AnswareToNext;