import React, { Fragment } from 'react';
import Logo from '../../assets/image/logo.svg'

const Footer = () => {
    return (
        <Fragment>
            <div className='relative z-[999]'>
                <div className='container mx-auto  flex justify-center pb-[40px]'>
                    <div>
                        <p className='text-center text-text'>
                        Copyright <span className='text-theme'>pucu</span> ©2023. All rights reserved
                        </p>
                        <div className='mt-[20px] flex justify-center text-center'>
                            <img src={Logo}></img>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;