import React from 'react';
import './Leaderboard.css';

const medalIcons = [
    '🥇',
    '🥈',
    '🥉',
];

function getAvatar(user) {
    if (user.avatar) return <img src={user.avatar} alt={user.name} className="avatar" />;
    return (
        <div className="avatar initials">
            {user.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
        </div>
    );
}

export default function Leaderboard({ leaderboard }) {
    const top3 = leaderboard.slice(0, 3);
    const rest = leaderboard.slice(3);

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">Leaderboard</h2>
            <div className="top3-row">
                {top3.map((user, idx) => (
                    <div className={`top3-card top${idx + 1}`} key={user._id}>
                        <div className="medal">{medalIcons[idx]}</div>
                        {getAvatar(user)}
                        <div className="username">{user.name}</div>
                        <div className="points">
                            <span role="img" aria-label="coin">🪙</span> {user.totalPoints}
                        </div>
                    </div>
                ))}
            </div>
            <div className="rest-list">
                {rest.map((user, idx) => (
                    <div className="user-row" key={user._id}>
                        <span className="rank">{idx + 4}</span>
                        {getAvatar(user)}
                        <span className="username">{user.name}</span>
                        <span className="points">
                            <span role="img" aria-label="coin">🪙</span> {user.totalPoints}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
} 