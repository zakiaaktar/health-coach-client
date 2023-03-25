import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);



    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);




    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className="text-4xl font-serif font-bold text-green-500"> Service Area</h2>
                <div className='w-1/2 mx-auto my-8'>
                    <p>Health coaches are trained professionals who work with clients to develop personalized health plans and provide guidance and support as they work towards their health and wellness goals. </p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;