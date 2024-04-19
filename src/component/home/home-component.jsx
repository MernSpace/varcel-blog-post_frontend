import React from 'react';
import Icon from '../../assets/image/icon-1.png'
import myImg from '../../assets/image/myimg.png'
import Node from '../../assets/image/node.png'
import Geact from '../../assets/image/react.png'
import Figma from '../../assets/image/figma.png'
import Show from '../../assets/image/show-1.png'
import Logo from '../../assets/image/logo.svg'
const HomeComponent = () => {
    return (
        <div className='relative z-[999]'>
            <div className='main__body'>
                <div className='py-[30px] md:py-[80px]'>
                    <div className='container'>
                        <div className='grid grid-cols-12 gap-[30px]'>
                            <div className='order-2 col-span-12 mt-[40px] py-[40px] md:mt-0 md:pr-[60px] lg:order-1 lg:col-span-8'>
                                <p className='text-[22px]'>
                                    <span className='text-theme'>HELLO!</span>
                                    There
                                </p>
                                <h2 className='relative mt-[20px] inline-block text-[32px]  font-semibold leading-tight md:text-[62px]'>
                                    HI, I'M SIFAT
                                    <span className=' absolute bottom-[15px] right-[-100px]'>
                                        <img src={Icon} className='wobble-hor-bottom'/>
                                    </span>
                                </h2>
                                <h2 className=' text-[52px] font-semibold leading-tight md:text-[62px]'>
                                    CREATIVE
                                    <span className='text-theme'>DEVELOPER!</span>
                                </h2>
                                <br/>
                                <p className='text-text'>
                                    I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage. 2024
                                </p>
                                <div className='mt-[50px]'>
                                    <a href='/' className='btn'>Download CV</a>
                                </div>
                                <div className='mt-[60px] grid grid-cols-12 gap-[30px] md:gap-[30px]'>
                                    <div className='col-span-12 md:col-span-4'>
                                        <h2 className='  text-[50px] font-semibold  '><span
                                            className='counter'>2</span> +</h2>
                                        <p className='text-white'>YEARS OF AWESOME EXPERIENCE WITH LIVE PROJECTS</p>
                                    </div>
                                    <div className='col-span-12 md:col-span-4'>
                                        <h2 className='  text-[50px] font-semibold  '><span
                                            className='counter'>100</span> +</h2>
                                        <p className='text-white'>PROJECTS COMPLETED ON THIS YEAR</p>
                                    </div>
                                    <div className='col-span-12 md:col-span-4'>
                                        <h2 className='  text-[50px] font-semibold  '><span
                                            className='counter'>770</span> +</h2>
                                        <p className='text-white'>HAVE TEAM MEMBER ON 10 COUNTRY</p>
                                    </div>
                                </div>
                                <div className='mt-[60px] grid grid-cols-12 gap-[30px]'>
                                    <div className="col-span-12 md:col-span-4 "><a href="/service">
                                        <div
                                            className=" grid gap-[20px] rounded-lg border-2 border-dotted border-text p-[20px]">
                                            <h3 className="text-center text-[24px]">Services</h3>
                                            <div className="flex  justify-around  p-[10px] gap-4">
                                                <img src={Node}
                                                     alt="" className="w-[50px]"/>
                                                <img src={Geact}
                                                     alt="" className="w-[50px]"/>
                                                <img src={Figma}
                                                     alt="" className="w-[50px]"/>
                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="col-span-12 md:col-span-4 "><a href="/portfolio">
                                        <div
                                            className=" grid gap-[10px] rounded-lg border-2 border-dotted border-text p-[20px]">
                                            <h3 className="text-center text-[24px]">Portfolio</h3>
                                            <div className="flex  justify-around">
                                                <img src={Show}
                                                     alt="" className=""/>

                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="col-span-12 md:col-span-4 "><a href="/about-us">
                                        <div
                                            className=" grid gap-[34px] rounded-lg border-2 border-dotted border-text p-[20px]">
                                            <h3 className="text-center text-[24px]">About Us</h3>
                                            <div className="flex  justify-around  p-[10px]">
                                                <img src={Logo}
                                                     alt="" />
                                            </div>
                                        </div>
                                    </a></div>

                                </div>
                            </div>
                            <div className=' order-1 col-span-12 lg:order-2 lg:col-span-4'>
                                <div className=' relative mt-[50px] '>
                                    <div>
                                        <img src={myImg} alt=""
                                             className=" w-full"/>
                                        <img src={Node} alt=""
                                             className="slide-top-1 absolute left-[-10px] top-[90px] w-[60px] md:top-[170px] md:w-[80px] lg:top-[120px]"/>
                                        <img
                                            src={Geact} alt=""
                                            className="slide-top-2 absolute right-[-10px] top-[260px] w-[60px] md:top-[450px] md:w-[80px] lg:top-[250px]"/>
                                    </div>
                                    <div
                                        className='pulse absolute bottom-[-50px] right-[40px] flex items-center gap-[20px] rounded-full bg-card px-[40px] py-[18px] md:bottom-[-17px] lg:right-[-34px]'>
                                        <div>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 512 512" className="text-[40px] text-theme" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"></path>
                                            </svg>

                                        </div>
                                        <div className=''>
                                            <h2  className='text-[26px] font-semibold'>500 k+</h2>
                                            <p className='text-base text-white'>Real Customers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeComponent;