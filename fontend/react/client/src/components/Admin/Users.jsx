import React from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';
import './Users.scss';

const Users = () => {
    return (
        <div className="users">
            <div className="users-header-container">
                <div className="users-header">
                    <h2><FaUserPlus /> Users</h2>
                    <button className="create-user-button"><FaUserPlus /> Create</button>
                </div>
                <p>View, create, update, delete and manage.</p>
            </div>
            <div className="search-filter-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search users..." />
                    <button className="search-button"><FaSearch /> Search</button>
                </div>
                <div className="time-filter">
                    <button className="filter-button">This week</button>
                    <button className="filter-button">Anytime</button>
                </div>
            </div>
            <div className="users-table-container">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Level</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example user row */}
                        <tr>
                            <td>#1</td>
                            <td>
                                <img src="avatar.jpg" alt="User Avatar" className="avatar" />
                                John Doe
                            </td>
                            <td>john.doe@example.com</td>
                            <td>Admin</td>
                            <td>
                                <button className="details-button">Details</button>
                                <button className="edit-button">✏️</button>
                                <button className="delete-button">🗑️</button>
                            </td>
                        </tr>
                        {/* Add more user rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;