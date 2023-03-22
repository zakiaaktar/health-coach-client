import React from 'react';
// import clock from '../../../assets/icons/clock.svg';
// import marker from '../../../assets/icons/marker.svg';
// import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';




const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 10.00 pm Everyday',


        },
        {
            id: 2,
            name: 'Locations',
            description: 'Rotterdam, The Netherlands',

        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Health Coach',

        }
    ]


    return (

        <div className='my-20'>
            <div className='text-center'>
                <h2 className="text-4xl font-serif font-bold text-green-500 my-12">Contact Info</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cardData.map(card => <InfoCard
                        key={card.id}
                        card={card}
                    ></InfoCard>)
                }
            </div>
        </div>
    );
};

export default InfoCards;