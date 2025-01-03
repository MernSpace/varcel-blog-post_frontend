import React, {Fragment} from 'react';
import Logo from '../../assets/image/lgo-removebg.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <div className='relative z-[999]'>
                <div className=' container mx-auto  pt-[30px]'>
                    <div className=' flex justify-between rounded-[10px] bg-card px-[15px]  py-[30px] md:px-[30px]'>
                        <div className='logo flex items-center '>
                            <NavLink to='/'>
                                <img src={Logo} className='' style={{ width: '100px', height: 'auto' }} />
                            </NavLink>
                        </div>
                        <menu className='hidden items-center lg:flex'>
                            <ul className='flex  gap-[40px]'>
                                <li className='navNotActive'>
                                    <NavLink to='/'   className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>Home</NavLink>
                                </li>
                                <li className='navNotActive' >
                                    <NavLink to='/about-us' className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>About Us</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/portfolio' className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>Portfolio</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/service' className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>Service</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/blog' className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>Blog</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/contact' className={({ isActive, isPending }) =>
                                        isPending ? "navNotActive" : isActive ? "navActive" : ""
                                    }>Contact</NavLink>
                                </li>

                            </ul>
                        </menu>

                    </div>

                </div>

            </div>
        </Fragment>
    );
};

export default Header;