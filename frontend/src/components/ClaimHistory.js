import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ClaimHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;
        axios.get(`${API_URL}/users/history`).then(res => setHistory(res.data));
    }, []);

    return (
        <div>
            <h2>Claim History</h2>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Points</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.userId?.name || 'Unknown'}</td>
                            <td>{item.points}</td>
                            <td>{new Date(item.claimedAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
