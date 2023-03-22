import React from 'react';
import bannar1 from '../../../assets/images/bannar1.jpg'




const BannerTwo = () => {
    return (
        <div className='my-24'>
            <div className='text-green-500 font-bold text-4xl text-center font-serif'>
                <h2>30%  off for Summer</h2>
                <p></p>
            </div>
            <section className='my-12 '
                style={{
                    background: `url(${bannar1})`

                }}
            >
                <div className="hero">

                    <div className='font-bold py-20 w-1/2 ml[-500] h-full'>
                        {/* <h4 className='text-lg text-primary fond-bold'>Appoinment</h4> */}
                        <h1 className="text-white text-4xl font-bold font-serif">3 months with a Health Coach</h1>
                        <p className="text-gray-400 py-3">Start working on your body today, and with our individual fitness program, already
                            in 90 days you will see a totally different person in the mirror!</p>
                        <p className='text-gray-400'>I am passionate about helping people improve their health and achieve their goals, and I believe that with the right guidance and support, anyone can make positive changes in their life.</p>
                        <p className='text-gray-400'>As a health coach, my mission is to empower individuals to take charge of their health and well-being by providing personalized guidance and support.</p>
                        <button className="btn bg-green-500 rounded-full px-6 py-3 border-none mt-7 font-bold">Get more info</button>

                    </div>

                </div>

            </section>
        </div>

    );
};

export default BannerTwo;