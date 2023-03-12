import React, { useEffect, useState } from 'react';



const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, customer, price, service, phone, status } = order;
    const [orderService, setOrderService] = useState({});



    useEffect(() => {
        fetch(`http://localhost:4000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])









    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure, you want to cancel this order');
    //     if (proceed) {
    //         fetch(`http://localhost:4000/orders/${id}`, {
    //             method: 'DELETE',
    //             // headers: {
    //             //     authorization: `Bearer ${localStorage.getItem('showpiece-token')}`
    //             // }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 // if (data.deletedCount > 0) {
    //                 //     alert('Deleted Successfully');
    //                 //     const remaining = orders.filter(odr => odr._id !== id);
    //                 //     setOrders(remaining)
    //                 // }
    //             })
    //     }
    // }




    return (
        <tr>
            <th>
                {/* <label>
                    <input type="checkbox" className="checkbox" />
                </label> */}
                {/* <label>
                    <button className='btn btn-outline btn-accent btn-sm rounded-full bg-red-700 outline-none'>Delete</button>
                </label> */}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 rounded-full">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>
            <button
                    onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </td>
            <th>

                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-info btn-sm rounded-full bg-red-700 outline-none'>Delete</button>
                </label>
            </th>
        </tr>


    );
};

export default OrderRow;
