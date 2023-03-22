import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import Services from '../Services/Services';
import Stories from '../Stories/Stories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Stories></Stories>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;