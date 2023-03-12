import React from 'react';
import coach from '../../../assets/images/coach.png'
import bannar from '../../../assets/images/bannar.jpeg'

const Banner = () => {
    return (
        <section className='mt-4  py-8'
            style={{
                background: `url(${bannar})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col justify-between lg:flex-row">

                    <div className='flex-start text-white'>
                        <h4 className='text-5xl font-extrabold font-serif'>Hi, I'm Anika...</h4>
                        <p className="text-2xl font-bold py-3">Your new personal coach for better life !!!</p>
                        <p className='text-xl'>I am passionate about helping people improve their health and achieve their goals, and I believe that with the right guidance and support, anyone can make positive changes in their life.</p>

                    </div>
                    <img src={coach} alt="" className="hidden md:block lg:w-1/2 -mb-14" />
                </div>
            </div>

        </section>
    );
};

export default Banner;