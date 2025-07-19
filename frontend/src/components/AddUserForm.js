import React, { useState } from 'react';

export default function AddUserForm({ onAdd }) {
    const [name, setName] = useState('');
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (name.trim()) {
                onAdd(name);
                setName('');
            }
        }}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Add user name" />
            <button type="submit">Add User</button>
        </form>
    );
} 