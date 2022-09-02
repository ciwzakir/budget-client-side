import { useState } from "react";
import UseAllOrders from "../../Hooks/UseAllOrders";

const Orders = () => {
  const [orders] = UseAllOrders();


  return (
    <div className="card bg-base-100 shadow-xl container mx-auto w-3/4">
      <h2 className="text-3xl p-10">All Orders Purchase</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Parts Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Payable Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.name}</td>
              <td>{order.quantity }</td>
              <td>{order.price} </td>
              <td>{order.quantity * order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
