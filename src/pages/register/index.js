import { useEffect, useRef, useState } from 'react';
import line from '../../assets/icons/login-register-icons/line.png'
import facebook from '../../assets/icons/login-register-icons/facebook.png'
import google from '../../assets/icons/login-register-icons/google.png'
import arrowDown from '../../assets/icons/login-register-icons/arrow-down.png'
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import '../../app/globals.css'
import Image from 'next/image';

const phoneCodes = [
    { country: 'bangladesh', phoneCode: '+880' },
    { country: 'bangladesh', phoneCode: '+658' },
    { country: 'bangladesh', phoneCode: '+452' },
    { country: 'bangladesh', phoneCode: '+56' },
    { country: 'bangladesh', phoneCode: '+792' }
]
const regions = [
    { country: 'bangladesh' },
    { country: 'bangladesh' },
    { country: 'pakistan' },
    { country: 'bangladesh' },
    { country: 'bangladesh' }
]

const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [openRegion, setOpenRegion] = useState(false)
    const [region, setRegion] = useState('Bangladesh')
    const [openPhoneCode, setOpenPhoneCode] = useState(false)
    const [phoneCode, setPhoneCode] = useState('+880')
    console.log(region);
    const handleRegister = (data) => {
        console.log(data);
    }

    let dropdownRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!dropdownRef.current.contains(e.target)) {
                setOpenPhoneCode(false);
                setOpenRegion(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });
    return (
        <div className='bg-[#F5F5F5] min-w-full md:min-h-screen'>
            <div className='max-w-[1440px] mx-auto md:pt-16'>
                <div className='w-full md:w-[550px] bg-white py-8 rouonded-xl md:shadow-md md:border mx-auto'>
                    <h1 className='text-3xl font-bold text-center text-primary py-6'>Registration</h1>

                    <form onSubmit={handleSubmit(handleRegister)} className='px-6 md:px-12'>

                        <div className='flex flex-col items-start w-full gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="region" id='region'>Region <span className='text-primary'>*</span></label>
                            <div ref={dropdownRef} className='relative'>
                                <div onClick={() => setOpenRegion(!openRegion)}
                                    className='cursor-pointer w-full h-10 border rounded flex items-center px-2'>
                                    <input {...register('region', { required: 'Region is required' })}
                                        className='cursor-pointer w-full text-gray-900 h-full focus:outline-none'
                                        defaultValue={region} value={region} readOnly type="text" name="region" id="region" />
                                    <Image className='w-3' src={arrowDown} alt="" />
                                </div>
                                {
                                    openRegion && <div class="absolute right-0 z-10 w-fit rounded bg-gray-50 shadow shadow-gray-400">
                                        <div className=''>
                                            {
                                                regions && regions.map(r => <div
                                                    onClick={() => setRegion(r.country)}>
                                                    <div onClick={() => setOpenRegion(false)}
                                                        className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                                                        <h1 className='text-left text-black font-semibold text-sm'>{r.country}</h1>
                                                    </div>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                            {errors.region && <p className='text-red-600 text-sm'>{errors.region.message}</p>}
                        </div>

                        <div className='mb-6 flex flex-col items-start gap-2'>
                            <label className='text-left font-bold text-gray-900' htmlFor="region" id='region'>Please Select Trade Role</label>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <input {...register('role')} className='cursor-pointer' type="radio" name="role" id="role1" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role1" id='role1'>Buyer</label>
                                </div>
                                <div>
                                    <input {...register('role')} className='cursor-pointer' type="radio" name="role" id="role2" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role2" id='role2'>Seller</label>
                                </div>
                                <div>
                                    <input {...register('role')} className='cursor-pointer' type="radio" name="role" id="role3" />
                                    <label className='cursor-pointer text-gray-600 text-sm ml-2' htmlFor="role3" id='role3'>Both</label>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="email" id='email'>Email address <span className='text-primary'>*</span></label>
                            <input {...register('email', { required: 'Email is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="email" name="email" id="email" />
                            {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="password" id='password'>Password <span className='text-primary'>*</span></label>
                            <input {...register('password', { required: 'Password is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="password" name="password" id="password" />
                            {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="confirmPassword" id='confirmPassword'>Confirm Password <span className='text-primary'>*</span></label>
                            <input {...register('confirmPassword', { required: 'Confirm Password is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="password" name="confirmPassword" id="confirmPassword" />
                            {errors.confirmPassword && <p className='text-red-600 text-sm'>{errors.confirmPassword.message}</p>}
                        </div>

                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="company" id='company'>Company Name <span className='text-primary'>*</span></label>
                            <input {...register('company', { required: 'Company Name is required' })}
                                className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="company" id="company" />
                            {errors.company && <p className='text-red-600 text-sm'>{errors.company.message}</p>}
                        </div>

                        <div className='grid grid-cols-2 gap-2 mb-6'>
                            <div className='flex flex-col items-start gap-2'>
                                <label className='text-left font-bold text-gray-900' htmlFor="firstName" id='firstName'>First Name Name <span className='text-primary'>*</span></label>
                                <input {...register('firstName', { required: 'First Name Name is required' })}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="firstName" id="firstName" />
                                {errors.firstName && <p className='text-red-600 text-sm'>{errors.firstName.message}</p>}
                            </div>

                            <div className='flex flex-col items-start gap-2 mb-1'>
                                <label className='text-left font-bold text-gray-900' htmlFor="lastName" id='lastName'>Last Name Name</label>
                                <input {...register('lastName')}
                                    className='w-full h-10 px-3 border rounded focus:outline-primary' type="text" name="lastName" id="lastName" />
                                {errors.lastName && <p className='text-red-600 text-sm'>{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col items-start gap-2 mb-6'>
                            <label className='text-left font-bold text-gray-900' htmlFor="phoneCode" id='phoneCode'>Phone Number <span className='text-primary'>*</span></label>
                            <div className='flex justify-between items-start w-full gap-2'>
                                <div ref={dropdownRef} className='relative'>
                                    <div onClick={() => setOpenPhoneCode(!openPhoneCode)}
                                        className=' cursor-pointer w-20 h-10 border rounded flex items-center px-2'>
                                        <input {...register('phoneCode', { required: 'First Name Name is required' })}
                                            className='cursor-pointer w-full text-gray-900 h-full focus:outline-none'
                                            defaultValue={phoneCode} value={phoneCode} readOnly type="text" name="phoneCode" id="phoneCode" />
                                        <Image className='w-3' src={arrowDown} alt="" />
                                    </div>
                                    {
                                        openPhoneCode && <div class="absolute right-0 z-50 w-fit rounded bg-gray-50 shadow shadow-gray-400">
                                            <div className=''>
                                                {
                                                    phoneCodes && phoneCodes.map(pCode => <div
                                                        onClick={() => setOpenPhoneCode(false)}>
                                                        <div onClick={() => setPhoneCode(pCode.phoneCode)}
                                                            className='cursor-pointer w-full hover:bg-gray-200 px-2 py-1'>
                                                            <h1 className='text-left text-black font-semibold text-sm'>{pCode.phoneCode}</h1>
                                                        </div>
                                                    </div>)
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>

                                <input {...register('phone')}
                                    className='flex-grow w-full h-10 px-3 border rounded focus:outline-primary' type="number" name="phone" id="phone" />
                                {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
                            </div>
                        </div>

                        <div className='flex items-center cursor-pointer'>
                            <input type="checkbox" name="signed" id="signed" />
                            <label className='text-gray-600 text-sm ml-2' htmlFor="signed" id='signed'>I have read the <Link className='text-primary' href=''>Privacy Policy</Link> and agree to it. *</label>
                        </div>

                        <button type="submit" className='w-36 h-10 mx-auto mt-8 flex justify-center items-center rounded-md bg-primary text-white font-bold'>
                            <h1>Register</h1>
                        </button>
                    </form>
                    <div className='flex justify-center items-center gap-2 mt-8'>
                        <Image className='w-32' src={line} alt="" />
                        <span className='text-gray-600'>or</span>
                        <Image className='w-32' src={line} alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-6 md:gap-8 mt-8'>
                        <div className='w-36 md:w-52 h-12 border rounded-md flex justify-center items-center gap-4'>
                            <Image className='w-8' src={facebook} alt="" />
                            <h1 className='text-gray-900 font-bold'>Facebook</h1>
                        </div>
                        <div className='w-36 md:w-52 h-12 border rounded-md flex justify-center items-center gap-4'>
                            <Image className='w-8' src={google} alt="" />
                            <h1 className='text-gray-900 font-bold'>Google</h1>
                        </div>
                    </div>
                    <h1 className='mt-6 text-sm text-gray-600 text-center'>Already have an account? Click here to <Link href='/login' className='text-primary font-bold'>Log in</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default index;