import React from 'react';
import './Header.scss';
import './Layout.scss'; // Import Layout.scss here

const Header = () => {
  return (
    <header className="header">
      <h1>Admin Panel</h1>
      <div className="login-section">
        <span>Welcome, Admin</span>
        <button>Logout</button>
      </div>
    </header>
  );
};

export default Header;