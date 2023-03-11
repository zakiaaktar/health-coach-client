import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))




        // {

        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('showpiece-token')}`
        //     }
        // })
        // .then(res => {
        //     if (res.status === 401 || res.status === 403) {
        //         return logOut()
        //     }
        //     return res.json()
        // })
        // .then(data => {
        //     // console.log('received', data)
        //     setOrders(data)
        // })

    }, [user?.email])



    // const handleDelete = id => {
    //     const proceed = window.confirm('Are you sure, you want to cancel this order');
    //     if (proceed) {
    //         fetch(`https://showpiece-zone-server.vercel.app/orders/${id}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('showpiece-token')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log(data);
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted Successfully');
    //                     const remaining = orders.filter(odr => odr._id !== id);
    //                     setOrders(remaining)
    //                 }
    //             })
    //     }
    // }









    return (
        <div className='lg:w-3/4 mx-auto'>
            <h2 className='text-3xl text-center my-10 font-bold'>You have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full pb-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Delete Orders</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                // handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        }
                       
                    </tbody>

                   

                </table>
            </div>
        </div>
    );
};

export default Orders;