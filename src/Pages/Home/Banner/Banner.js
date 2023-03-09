import React from 'react';
import coach from '../../../assets/images/coach.png'

const Banner = () => {
    return (
        <section className='mt-6 bg-sky-200 py-8'
        // style={{
        //  background: `url(${appointment})`
        // }}
     >
         <div className="hero">
             <div className="hero-content flex-col justify-between lg:flex-row">
                
                 <div className='flex-start'>
                     <h4 className='text-4xl text-primary font-extrabold'>Hi, I'm Anika...</h4>
                     {/* <h1 className="text-white text-4xl font-bold">Make an appoinment today </h1> */}
                     <p className="text-2xl font-bold py-3">Your new personal coach for better life !!!</p>
                     <p>I am passionate about helping people improve their health and achieve their goals, and I believe that with the right guidance and support, anyone can make positive changes in their life.</p>
                     
                 </div>
                 <img src={coach} alt="" className="hidden md:block lg:w-1/2 -mb-12" />
             </div>
         </div>

     </section>
    );
};

export default Banner;