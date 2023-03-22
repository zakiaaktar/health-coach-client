import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;


    return (

        // <section className='mt-32'
        //    style={{
        //     background: `url(${price})`
        //    }}
        // >
        <div className='bg-base-100 rounded-none w-96 p-6 m-6 mx-16'>
            <div className='text-center'>
                <h3>
                    <span className='text-5xl font-bold text-green-500'>${option.price}</span>
                    <span className='text-2xl text-gray-500'>/mon</span>
                </h3>
                <p className='text-3xl my-4 text-green-500 font-bold'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <div className='text-center'>
                <button className='btn bg-green-500 rounded-full px-6 border-none mt-2 font-bold mx-auto'>Checkout</button>
            </div>
        </div>

    );
};

export default PriceOption;