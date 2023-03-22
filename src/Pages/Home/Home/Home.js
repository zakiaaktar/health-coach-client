import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerTwo from '../BannerTwo/BannerTwo';
import InfoCards from '../InfoCards/InfoCards';
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
            {/* <Pricing></Pricing>
            <Testimonial></Testimonial> */}
            <InfoCards></InfoCards>
            <Footer></Footer>
        </div>
    );
};

export default Home;