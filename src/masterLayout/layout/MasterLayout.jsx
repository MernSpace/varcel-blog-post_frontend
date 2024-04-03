import React from 'react';
import './master.css'
import Header from "../Header/Header.jsx";
import Footer from '../footer/Footer.jsx';

const MasterLayout = (props) => {
    return (
        <div className='bg-img'>
            <Header/>
            {props.children}
            <Footer/>
            
        </div>
    );
};

export default MasterLayout;