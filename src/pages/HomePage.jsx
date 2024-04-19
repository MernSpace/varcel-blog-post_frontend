import React from 'react';
import MasterLayout from '../masterLayout/layout/MasterLayout';
import HomeComponent from "../component/home/home-component.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <HomeComponent/>
        </MasterLayout>
    );
};

export default HomePage;