import React, { useState, useEffect } from 'react';
import './Admin.scss';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchOrders = async () => {
      setLoading(true);
      // Replace with actual API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve([{ id: 1, item: 'Product A', quantity: 2 }, { id: 2, item: 'Product B', quantity: 1 }]), 1000)
      );
      setOrders(response);
      setLoading(false);
    };

    fetchOrders();
  }, []);

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="orders-content">
      <h1>Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>
                <button onClick={() => handleDelete(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;