import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../../assets/images/about.jpg';
//import about1 from '../../../assets/images/about1.png'


const About = () => {
    return (
        <div className="hero my-20 font-serif">
        <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
            <div className='relative sm:w-1/2 h-full'>
                <img src={about} alt="" className=" h-full" />
                {/* <img src={about1} alt="" className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" /> */}
                
            </div>
            <div className='w-1/2'>
                <p className="text-4xl font-bold text-green-500">About Me</p>
                <h1 className="my-5">
                As a health coach, my mission is to empower individuals to take charge of their health and well-being by providing personalized guidance and support.  <br />
                    & of experience <br />
                    in this field.</h1>
                <p>My background includes a degree in nutrition and dietetics, as well as certification as a health coach. I stay up-to-date with the latest research and trends in the health and wellness field, and I am committed to providing evidence-based recommendations that are tailored to each individual's needs and preferences.</p>
                
                <Link to='/' className="btn bg-green-500 rounded-full px-6 py-3 border-none mt-7 font-bold">Get more info</Link>
            </div>
        </div>
    </div>
    );
};

export default About;