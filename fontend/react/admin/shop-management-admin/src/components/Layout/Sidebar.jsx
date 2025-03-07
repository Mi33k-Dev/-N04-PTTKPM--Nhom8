import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import './Layout.scss'; // Import Layout.scss here

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li><Link to="/admin/products">Products</Link></li>
          <li><Link to="/admin/users">Users</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;