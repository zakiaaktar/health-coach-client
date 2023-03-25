import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const AddService = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);



    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;


        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }


        fetch('http://localhost:8000//orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('coach-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }




    return (
        <div className='card bg-base-100 shadow-xl rounded-none my-10 p-6 w-1/2 mx-auto'>

            <form onSubmit={handlePlaceOrder}>
                <div className='text-center mt-6 mb-6 font-bold'>
                    <h2 className='text-3xl'>Your's Order: {title}</h2>
                    <h4 className="text-xl text-green-500  font-bold mt-3">Price: ${price}</h4>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-green w-full" />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Message"></textarea>
                <div className='text-center mt-6'>
                    <input className='btn bg-green-500 mt-3 w-full rounded-full border-none' type="submit" value="Place Your Order" />
                </div>

            </form>
        </div>
    );
};

export default AddService;