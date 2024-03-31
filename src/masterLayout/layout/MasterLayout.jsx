import React from 'react';
import './master.css'
import Header from "../Header/Header.jsx";

const MasterLayout = (props) => {
    return (
        <div className='bg-img'>
            <Header/>
            {props.children}
            
        </div>
    );
};

export default MasterLayout;