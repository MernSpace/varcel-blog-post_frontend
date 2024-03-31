import React, {Fragment} from 'react';
import Logo from '../../assets/image/logo.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <div className='relative z-[999]'>
                <div className=' container mx-auto  pt-[30px]'>
                    <div className=' flex justify-between rounded-[10px] bg-card px-[15px]  py-[30px] md:px-[30px]'>
                        <div className='logo flex items-center '>
                            <NavLink to='/'>
                                <img src={Logo}/>
                            </NavLink>
                        </div>
                        <menu className='hidden items-center lg:flex'>
                            <ul className='flex  gap-[40px]'>
                                <li className='navActive'>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/about-us'>About Us</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/protfolio'>Portfolio</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/service'>Service</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/blog'>Blog</NavLink>
                                </li>
                                <li className='navNotActive'>
                                    <NavLink to='/contact'>Contact</NavLink>
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