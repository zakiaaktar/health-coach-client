import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <BannerTwo></BannerTwo>
        </div>
    );
};

export default Home;