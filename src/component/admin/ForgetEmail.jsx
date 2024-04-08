import React, {Fragment} from 'react';
import '../../assets/css/login.css'
import {Link} from "react-router-dom";
const ForgetEmail = () => {
    return (
        <Fragment>
            <div className='card-flex bg-img_login bg-white'>
                <div className="card w-96 bg shadow-xl ">
                    <div className="card-body">
                        <input type="text" placeholder="Email"
                               className="input p-2 rounded card-input bg-none w-full max-w-xs"/>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/opt'>OTP</Link></button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default ForgetEmail;