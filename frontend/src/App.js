import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser, claimPoints, fetchLeaderboard } from './api/api';
import UserSelector from './components/UserSelector';
import AddUserForm from './components/AddUserForm';
import Leaderboard from './components/Leaderboard';
import ClaimHistory from './components/ClaimHistory';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [leaderboard, setLeaderboard] = useState([]);
    const [lastClaim, setLastClaim] = useState(null);
    const [newUserName, setNewUserName] = useState('');

    const loadUsers = async () => setUsers(await fetchUsers());
    const loadLeaderboard = async () => setLeaderboard(await fetchLeaderboard());

    useEffect(() => {
        loadUsers();
        loadLeaderboard();
    }, []);

    const handleAddUser = async () => {
        if (!newUserName) return alert('Enter a name');
        await addUser(newUserName);
        setNewUserName('');
        loadUsers();
        loadLeaderboard();
    };

    const handleClaim = async () => {
        if (!selectedUser) return;
        const result = await claimPoints(selectedUser);
        setLastClaim(result);
        loadLeaderboard();
        loadUsers();
    };

    return (
        <div>
            <div className="header-panel">
                <h1 className="main-title">
                    <span role="img" aria-label="trophy">🏆</span> User Points System
                </h1>
                <div className="user-controls">
                    <input
                        className="add-user-input"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder="Add user name"
                    />
                    <button className="add-user-btn" onClick={handleAddUser}>Add User</button>
                    <select
                        className="user-select"
                        onChange={(e) => setSelectedUser(e.target.value)}
                        value={selectedUser}
                    >
                        <option value="">Select User</option>
                        {users.map(user => (
                            <option key={user._id} value={user._id}>{user.name}</option>
                        ))}
                    </select>
                    <button
                        className="claim-btn"
                        onClick={handleClaim}
                        disabled={!selectedUser}
                    >
                        Claim
                    </button>
                </div>
                {lastClaim && (
                    <div className="claim-message">
                        <span>🎉 {lastClaim.name} claimed {lastClaim.points} points!</span>
                    </div>
                )}
            </div>
            <Leaderboard leaderboard={leaderboard} />
        </div>
    );
}

export default App; 