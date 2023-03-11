import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;



    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-none">
            <figure><img src={img} alt="Sservice-img" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='text-justify'>{description}</p>
                <p className='text-xl text-orange-600 font-bold text-center'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none mt-3 pr-24 pl-24 border-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;