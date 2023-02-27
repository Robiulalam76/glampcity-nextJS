import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import arrowDown from '../../../assets/icons/login-register-icons/arrow-down.png'
import img1 from '../../../assets/icons/contact-form-icons/flag1.png'


const phoneCodes = [
    { country: 'bangladesh', phoneCode: '+880', flag: 'https://cdn-icons-png.flaticon.com/128/3955/3955515.png' },
    { country: 'bangladesh', phoneCode: '+658', flag: 'https://cdn-icons-png.flaticon.com/128/3955/3955515.png' },
    { country: 'bangladesh', phoneCode: '+452', flag: 'https://cdn-icons-png.flaticon.com/128/3955/3955515.png' },
    { country: 'bangladesh', phoneCode: '+56', flag: 'https://cdn-icons-png.flaticon.com/128/3955/3955515.png' },
    { country: 'bangladesh', phoneCode: '+792', flag: 'https://cdn-icons-png.flaticon.com/128/3955/3955515.png' }
]

const rols = [
    { role: 'Seller' },
    { role: 'Buyer' },
    { role: 'Both' }
]
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [openPhoneCode, setOpenPhoneCode] = useState(false)
    const [phoneCode, setPhoneCode] = useState('')
    const [openRole, setOpenRole] = useState(false)
    const [role, setRole] = useState('seller')
    const [flag, setFlag] = useState('https://cdn-icons-png.flaticon.com/128/3955/3955515.png')

    const handleContact = (data) => {
        console.log(data);
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpenPhoneCode(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <section className='mt-36 pb-16'>
            <h1 className='text-gray-900 text-3xl text-center font-semibold mb-5 pt-16'>Tell Us What You Need</h1>
            <form onSubmit={handleSubmit(handleContact)} className='px-2 md:px-12 md:w-[950px] mx-auto'>
                <div className='flex flex-col items-start gap-2 mb-6'>
                    <input {...register('serviceName', { required: 'Service Name is required' })}
                        className='w-full h-12 px-3 border rounded focus:outline-primary' type="text" name="serviceName" placeholder='Requirements (Enter product or service name)' />
                    {errors.serviceName && <p className='text-red-600 text-sm'>{errors.serviceName.message}</p>}
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                    <div className='grid md:grid-cols-2 gap-2'>
                        <input {...register('firstName', { required: 'First Name is required' })}
                            className='w-full h-12 px-3 border rounded focus:outline-primary mb-4 md:mb-0' type="text" name="firstName" placeholder='First Name' />

                        <input {...register('lastName')}
                            className='w-full h-12 px-3 border rounded focus:outline-primary' type="text" name="lastName" placeholder='Last Name' />
                    </div>
                    {errors.firstName && <p className='text-red-600 text-sm text-left'>{errors.firstName.message}</p>}
                </div>

                <div className='flex flex-col items-start gap-2 mb-6'>
                    <input {...register('email', { required: 'Email address is required' })}
                        className='w-full h-12 px-3 border rounded focus:outline-primary' type="email" name="email" placeholder='Email address' />
                    {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>

                <div className='mb-6'>
                    <div className='grid md:grid-cols-2 gap-2'>

                        <div className='flex flex-col gap-2'>
                            <input {...register('Compnay', { required: 'Compnay Name is required' })}
                                className='w-full h-12 px-3 border rounded focus:outline-primary' type="text" name="Compnay" placeholder='Compnay' />
                            {errors.Compnay && <p className='text-red-600 text-sm'>{errors.Compnay.message}</p>}
                        </div>

                        <div ref={dropdownRef} className='relative mt-4 md:mt-0'>
                            <div className='flex items-center bg-white border focus:outline-primary rounded'>
                                <div onClick={() => setOpenPhoneCode(!openPhoneCode)}
                                    className='w-20 h-12 flex items-center gap-2 px-2'>
                                    <img className='w-7 h-7' src={flag} alt="" />
                                    <img className='w-3' src={arrowDown} alt="" />
                                </div>
                                <input {...register('phone', { required: 'Phone Number is required' })}
                                    className='w-full h-12 px-3 border-y border-r rounded-r focus:outline-none' type="number" name="phone" placeholder='Phone Number' />
                            </div>
                            {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
                            {
                                openPhoneCode && <div class="absolute left-0 z-50 w-fit rounded bg-gray-50 shadow shadow-gray-400">
                                    <div className=''>
                                        {
                                            phoneCodes && phoneCodes.map(pCode => <div
                                                onClick={() => setOpenPhoneCode(false)}>
                                                <div onClick={() => setFlag(pCode.flag)}>
                                                    <div onClick={() => setPhoneCode(pCode.phoneCode)}
                                                        className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                                                        <img className='w-8' src={pCode.flag} alt="" />
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div ref={dropdownRef} className='relative'>
                    <div onClick={() => setOpenRole(!openRole)}
                        className='cursor-pointer w-full h-12 border rounded flex justify-between items-center bg-white'>
                        <input {...register('role')}
                            className='cursor-pointer w-full text-gray-900 h-full px-3 focus:outline-none'
                            defaultValue={role} value={role} readOnly type="text" name="role" />
                        <img className='w-3 mr-3' src={arrowDown} alt="" />
                    </div>
                    {
                        openRole && <div class="absolute right-0 z-10 w-32 rounded bg-gray-50 shadow shadow-gray-400">
                            <div className=''>
                                {
                                    rols && rols.map(r => <div
                                        onClick={() => setRole(r.role)}>
                                        <div onClick={() => setOpenRole(false)}
                                            className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                                            <h1 className='text-left text-black font-semibold text-sm'>{r.role}</h1>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    }
                </div>

                <button type="submit" className='w-full md:w-96 h-14 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                    <h1>Submit</h1>
                </button>
            </form>
        </section>
    );
};

export default ContactForm;