import React, { Fragment } from 'react';
import Logo from '../../assets/image/logo.svg'


const AdminLogin = () => {
    return (
        <Fragment>
            <div className='flex min-h-screen items-stretch text-white '>
                <div className='bg-img_login relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex'>
                    <div className='absolute inset-0 z-0 bg-black opacity-60'></div>
                    <div className='z-10 w-full px-24 text-end'>
                        <h2 className='text-end text-[60px] font-bold tracking-wide'>
                        We Make <span className='text-theme'>Spectacular!</span>
                        </h2>
                        <p className='my-4 text-base'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                        </p>
                    </div>
                </div>
                <div className='class="z-0 flex w-full items-center  bg-card px-0  md:px-16 lg:w-1/2"'>
                    <div className='absolute inset-0 z-10 items-center bg-gray-500 bg-cover bg-no-repeat lg:hidden'>
                        <div className='absolute inset-0 z-0 bg-black opacity-60'></div>
                    
                    </div>
                    <div className='z-20 w-full py-6'>
                        <div>
                            <img src={Logo} className='w-[200px]'></img>
                        </div>
                        <div  className='mt-[50px] space-x-2 py-6 text-left'>
                            <h2 className='text-[30px]'>Wellcome!</h2>
                        </div>
                        <p className='text-gray-100'>Sign Into Your Account</p>
                        <form className=' w-full px-4 sm:w-2/3 lg:px-0'>
                            <div className='pb-2 pt-4'>
                                <input type=" text" placeholder='Email' className='block w-full rounded-sm bg-black p-4 text-lg' />
                            </div>
                            <div className='pb-2 pt-4'>
                                <input type=" text" placeholder='Password' className='block w-full rounded-sm bg-black p-4 text-lg' />
                            </div>
                            <div className='pb-2 pt-4'>
                               <button className='btn block'>Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>

            </div>
            
        </Fragment>
    );
};

export default AdminLogin;