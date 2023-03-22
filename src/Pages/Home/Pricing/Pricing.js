import React from 'react';
import PriceOption from '../PriceOption/PriceOption';
import price from '../../../assets/images/price.jpg'


const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Basic', price: 800, features: [
                '6 sessions over 3 months ',
                'Unlimited Q&A Support',
                'Free app subscription (Stress Coach)'

            ]
        },
        {
            id: 2, name: 'Golden', price: 1200, features: [
                '12 Sessions over 6 months',
                'Unlimited Q&A Support',
                'Free app subscription (Stress Coach)'

            ]
        },
        {
            id: 3, name: 'Platinum', price: 1900, features: [
                '24 Sessions over 12 months',
                'Unlimited Q&A Support',
                'Free app subscription (Stress Coach)'
                

            ]
        },
    ]


    return (
        <div>
            <div className='text-4xl font-bold text-green-500 p-12 text-center font-serif'>
                <h2 >Choose One of our Premium Packages </h2>
                <p>for the Best Deal !!! </p>
            </div>
            <section className=''
                style={{
                    background: `url(${price})`
                }}
            >
                <div className='grid md:grid-cols-3 gap-3 mt-4 py-16'>
                    {
                        pricingOptions.map(option => <PriceOption
                            key={option.id}
                            option={option}
                        >
                        </PriceOption>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Pricing;