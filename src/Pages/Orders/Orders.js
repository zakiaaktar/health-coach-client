import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:4000/orders?email=${user?.email}`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('coach-token')}`
            // }
        })

            .then(res => {
                // if (res.status === 401 || res.status === 403) {
                //     return logOut()
                // }
                return res.json()
            })
            .then(data => {
                //console.log('received', data)
                setOrders(data)
            })

    }, [user?.email, logOut])




//     const handleDelete = id => {
//         const proceed = window.confirm('Are you sure, you want to cancel this order');
//         if (proceed) {
//             fetch(`https://http://localhost:8000/orders/${id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     authorization: `Bearer ${localStorage.getItem('coach-token')}`
//                 }
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     if (data.deletedCount > 0) {
//                         alert('Deleted Successfully');
//                         const remaining = orders.filter(odr => odr._id !== id);
//                         setOrders(remaining)
//                     }
//                 })
//         }
//     }






//     const handleStatusUpdate = id => {
//         fetch(`http://localhost:8000/orders/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('coach-token')}`
//             },
//             body: JSON.stringify({ status: 'Approved' })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);

//                 if (data.modifiedCount > 0) {
//                     const remaining = orders.filter(odr => odr._id !== id);
//                     const approving = orders.find(odr => odr._id === id);
//                     approving.status = 'Approved'


//                     const newOrders = [approving, ...remaining];
//                     setOrders(newOrders);
//                 }
//             })
//     }






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
                            <th>Name & Phone Number</th>
                            <th>Service Name & Price</th>
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