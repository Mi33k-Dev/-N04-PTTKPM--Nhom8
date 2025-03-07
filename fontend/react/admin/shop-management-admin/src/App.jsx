import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Admin/Dashboard';
import Orders from './components/Admin/Orders';
import Products from './components/Admin/Products';
import Users from './components/Admin/Users';
import './styles/admin.scss';
import './components/Layout/Layout.scss'; // Import Layout.scss here

const App = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;