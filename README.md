<h1 align="center">📝 Task Manager (MERN Stack)</h1>

<p align="center">
A full-stack <b>Task Manager</b> built with <b>MongoDB, Express.js, React, and Node.js</b>.<br>
Easily register, log in, manage tasks, and track recent activity — all with a clean, responsive UI.
</p>

<p align="center">
  <a href="https://task-manager-mern-flame.vercel.app"><img src="https://img.shields.io/badge/Frontend-Live%20Demo-blue?style=for-the-badge&logo=react" alt="Live Demo"></a>
  <a href="https://task-manager-mern-a90b.onrender.com"><img src="https://img.shields.io/badge/Backend-Live%20API-green?style=for-the-badge&logo=node.js" alt="Live API"></a>
</p>

---

## 🚀 Features

### **Frontend**
- 🔐 **User Authentication** — Register, Login, and Logout.
- 🗂 **Task Management** — Create, Edit, Delete, and View tasks.
- 📅 **Recent Tasks** — See the latest added tasks instantly.
- 🔍 **Search & Filters** — Quickly find specific tasks.
- 📱 **Responsive** — Optimized for mobile, tablet, and desktop.
- 🛡 **Protected Routes** — Accessible only to logged-in users.

### **Backend**
- 🗄 **REST API** with Express.js.
- 🛢 **MongoDB** for persistent data storage.
- 🔑 **JWT Authentication** & **bcryptjs** password hashing.
- 🛡 **Middleware-based Authorization**.
- ⚠ **Error Handling Middleware**.

---

## 🛠 Tech Stack

| **Frontend** | **Backend** |
|--------------|-------------|
| React (Hooks & Context API) | Node.js |
| Tailwind CSS | Express.js |
| Axios | MongoDB + Mongoose |
| React Router DOM | JWT Authentication |
|  | bcryptjs, dotenv, cors |

---

## 📂 Folder Structure

```plaintext
TASK_MANAGER_MERN/
│
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Auth & error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── .env             # Environment variables
│   ├── server.js        # Entry point
│
├── frontend/
│   ├── components/      # Reusable UI
│   ├── context/         # Auth context
│   ├── hooks/           # Custom hooks
│   ├── pages/           # App pages
│   ├── services/        # API calls
│   ├── App.jsx          # Root component
│
└── README.md
```


## ⚙️ Environment Variables

## Frontend
```
VITE_API_BASE_URL=https://task-manager-mern-a90b.onrender.com
```

Create a `.env` file inside the **backend** folder:

##
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📦 Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/NEELSAMEL23/Task_Manager_MERN.git
cd Task_Manager_MERN
```

2️⃣ **Install dependencies**

# Backend
cd backend
npm install

# Frontend
```
cd ../frontend
npm install
```

3️⃣ **Run the application**


# Backend
```
node server.js
```
# Frontend
```
npm run dev
```

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint             | Description                | Auth Required |
| ------ | -------------------- | -------------------------- | ------------- |
| POST   | `/api/auth/register` | Register a new user        | ❌ No          |
| POST   | `/api/auth/login`    | Login existing user        | ❌ No          |
| GET    | `/api/auth/profile`  | Get logged-in user profile | ✅ Yes         |



### Task Routes (All require authentication)

| Method | Endpoint           | Description                          | Auth Required |
| ------ | ------------------ | ------------------------------------ | ------------- |
| GET    | `/api/task/`       | Get all tasks for the logged-in user | ✅ Yes         |
| GET    | `/api/task/recent` | Get recently added tasks             | ✅ Yes         |
| GET    | `/api/task/:id`    | Get a single task by ID              | ✅ Yes         |
| POST   | `/api/task/`       | Create a new task                    | ✅ Yes         |
| PUT    | `/api/task/:id`    | Update an existing task              | ✅ Yes         |
| DELETE | `/api/task/:id`    | Delete a task                        | ✅ Yes         |



<p align="center">Made with ❤️ using the MERN Stack</p> ``






