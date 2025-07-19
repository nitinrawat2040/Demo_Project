# 🏆 Points Claim & Leaderboard System
This is a full-stack web application where users can select a user, claim random points (1 to 10), and dynamically view a real-time leaderboard. The system keeps a history of all claimed points using a MongoDB database.

# 📌 Features
## ✅ Backend (Node.js + Express + MongoDB)
**1. User Management**

Initialize with 10 default users (e.g., Nitin, Divya, Pulkit).

Add new users via the frontend.

**2. Claim Points**

Randomly awards 1 to 10 points when a claim is made.

Points are updated in the Users collection.

Every claim is logged in the ClaimHistory collection.

**3. Leaderboard API**

Calculates dynamic rankings based on total points.

Returns a sorted list (descending) of users with name, total points, and rank.

**4. MongoDB Collections**

Users: stores user info and total points.

ClaimHistory: logs every point claim (timestamp, userId, points awarded).

# ✅ Frontend (React.js)
**1. User Selection UI**

Dropdown to select from existing users.

Form to add a new user.

**2. Claim Points**

A "Claim" button awards random points to the selected user.

Shows the awarded points in real-time.

**3. Leaderboard**

**Displays:**

User name

Total points

Rank (updates dynamically)

***Automatically updates after every claim.***

## 4. Claim History

Displays a list of all claim logs for transparency and tracking.


## 🛠️ Technologies Used
**- Frontend:** ReactJS

**- Backend:** Node.js, Express.js

**- Database:** MongoDB

**- Styling:** CSS (basic styling with Leaderboard.css)

**- Tools:** Postman, VSCode


## 📂 Project Structure
```bash
DEMO-PROJECT/
├── backend/
│   ├── .vercel/
│   ├── api/
│   │   └── leaderboard.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── claimController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── ClaimHistory.js
│   │   └── User.js
│   ├── routes/
│   │   ├── claimRoutes.js
│   │   └── userRoutes.js
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
├── frontend/
│   ├── build/
│   │   ├── static/
│   │   ├── asset-manifest.json
│   │   └── index.html
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── AddUserForm.js
│   │   │   ├── ClaimHistory.js
│   │   │   ├── Leaderboard.css
│   │   │   ├── Leaderboard.js
│   │   │   └── UserSelector.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── README.md

```


## 📡 API Endpoints
| Method | Endpoint               | Description                         |
|--------|------------------------|-------------------------------------|
| GET    | `/api/users`          | Get all users                       |
| POST   | `/api/users`          | Add a new user                      |
| POST   | `/api/claim`          | Claim random points for a user      |
| GET    | `/api/leaderboard`    | Get leaderboard sorted by points    |
| GET    | `/api/claims/history` | Get history of all claims           |


# 🚀 Getting Started
**📦 Prerequisites**
1. Node.js (v14+)
2. MongoDB
3. npm

# 🔧 Backend Setup
```bash
cd backend
npm install
```

Create a .env file in the backend/ folder:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:
```bash
node server.js
```

# 💻 Frontend Setup
```bash
cd frontend
npm install
npm start
```

# 📸 Screenshots
<img width="1169" height="615" alt="Screenshot 2025-07-18 225557" src="https://github.com/user-attachments/assets/1db19f69-c1a1-4fce-8f08-f5e136736347" />

<img width="1169" height="615" alt="Screenshot 2025-07-18 225557" src="https://github.com/user-attachments/assets/2f5978cf-06c0-4825-ad06-fdc40c07bf6c" />

<img width="1135" height="604" alt="Screenshot 2025-07-18 225626" src="https://github.com/user-attachments/assets/ae65e9c4-f2ba-492e-a61e-c8ad0af6ffd6" />

<img width="1219" height="621" alt="Screenshot 2025-07-18 225902" src="https://github.com/user-attachments/assets/4dd5b181-9bb5-4f22-b451-a4d2d513e70c" />


## 👨‍💻 Author

 **Nitin Singh Rawat** <br>
  You can connect with me on 👇
- 📬 [Email](nitinrawat2040@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/nitin-singh-rawat-9594b228b)
- 🧑‍💻 [GitHub](https://github.com/nitinrawat2040)

