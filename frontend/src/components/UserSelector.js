import React from 'react';

export default function UserSelector({ users, selectedUser, setSelectedUser }) {
    return (
        <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
            <option value="">Select User</option>
            {users.map(user => (
                <option key={user._id} value={user._id}>{user.name}</option>
            ))}
        </select>
    );
} 