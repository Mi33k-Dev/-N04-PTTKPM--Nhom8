import React from 'react';
import './Orders.scss';

const Orders = () => {
    return (
        <div className="orders">
            <div className="orders-header-container">
                <h2>Orders</h2>
                <div className="orders-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Search orders by ID or customer name..." />
                        <button>Search</button>
                    </div>
                    <button className="add-order-button">Add New Order</button>
                </div>
            </div>
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Total Price</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example order row */}
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>$200</td>
                            <td>2025-02-21</td>
                            <td>Processing</td>
                            <td>
                                <button className="view-button">View</button>
                                <button className="update-button">Update</button>
                                <button className="delete-button">Delete</button>
                            </td>
                        </tr>
                        {/* Add more order rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;