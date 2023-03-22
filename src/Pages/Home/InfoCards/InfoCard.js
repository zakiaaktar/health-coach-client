import React from 'react';


const InfoCard = ({ card }) => {
    const { name, description, icon } = card;


    return (
       
            
                <div className="bg-green-500 rounded-none w-96 card p-6 mx-auto md:card-side cursor-pointer text-white hover:bg-gray-700">
                    {/* <figure>
                <img src={icon} alt="Album" />
            </figure> */}
                    <div className="card-body font-bold">
                        <h2 className="card-title text-2xl">{name}</h2>
                        <p className='text-xl'>{description}</p>

                    </div>
                </div>
            
        
    );
};

export default InfoCard;