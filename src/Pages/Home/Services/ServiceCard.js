import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price, description } = service;



    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-none">
            <figure><img data-aos="zoom-out" src={img} alt="Service-img" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='text-justify'>{description.slice(0, 100)}...</p>
                <p className='text-xl text-green-500 font-bold text-center'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-green-500 rounded-full px-6 py-3 border-none mt-2 font-bold cursor-pointer">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;