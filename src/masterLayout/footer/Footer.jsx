import React, { Fragment } from 'react';
import Logo from '../../assets/image/lgo-removebg.png'

const Footer = () => {
    return (
        <Fragment>
            <div className='relative z-[999]'>
                <div className='container mx-auto  flex justify-center pb-[40px]'>
                    <div>
                        <p className='text-center text-text'>
                        Copyright © 2025. All rights reserved
                        </p>
                        <div className='mt-[20px] flex justify-center text-center'>
                            <img src={Logo} style={{ width: '150px', height: 'auto' }} ></img>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;