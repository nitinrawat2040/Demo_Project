const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchUsers = () => fetch(`${API_URL}/users`).then(res => res.json());
export const addUser = (name) =>
    fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    }).then(res => res.json());

export const claimPoints = (userId) =>
    fetch(`${API_URL}/claim`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId })
    }).then(res => res.json());

export const fetchLeaderboard = () => fetch(`${API_URL}/leaderboard`).then(res => res.json());
export const fetchHistory = () => fetch(`${API_URL}/history`).then(res => res.json()); 