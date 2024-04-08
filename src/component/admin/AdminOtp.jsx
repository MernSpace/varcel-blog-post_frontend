import React from 'react';
import ReactCodeInput from "react-code-input";
import  '../../assets/css/login.css'
const AdminOtp = () => {
    return (
        <div className='card-flex'>
            <div className='block text-center justify-center'>
                <div className=''>
                    <h2>OPT Send Success</h2>
                    <ReactCodeInput type='number' fields={6}/>

                </div>
                <div className='justify-center mt-7'>
                    <button className='btn block mt-7'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default AdminOtp;