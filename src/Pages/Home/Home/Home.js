import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Testimonial></Testimonial>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;