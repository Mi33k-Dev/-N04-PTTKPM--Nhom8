import React, { useState } from 'react';
import './Admin.scss';

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User A', email: 'usera@example.com' },
    { id: 2, name: 'User B', email: 'userb@example.com' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const handleAdd = () => {
    const user = { id: Date.now(), ...newUser };
    setUsers([...users, user]);
    setNewUser({ name: '', email: '' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="admin-content">
      <h1>Users</h1>
      <div className="add-user">
        <input
          type="text"
          placeholder="User Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="User Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleAdd}>Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;