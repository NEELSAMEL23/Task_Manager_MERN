# 📝 Task Manager (MERN Stack - Frontend)

A responsive **Task Manager** frontend built with **React** and **Tailwind CSS**, designed for the MERN stack.  
This application allows users to **register, log in, create, edit, and delete tasks** with a clean and modern UI.

---
## 🌐 Live Demo

[🚀 **Try the Live App**](https://task-manager-mern-flame.vercel.app)  


## 🚀 Features

- 🔐 **User Authentication** — Register, Login, and Logout functionality.
- 🗂 **Task Management** — Create, Update, Delete, and View tasks.
- 📅 **Recent Tasks** — View your most recently added tasks.
- 🔍 **Search & Filters** — Easily find and organize tasks.
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop.
- ⚡ **Axios API Integration** — Uses a centralized Axios instance for API calls.
- 🛡 **Protected Routes** — Restricts access to authenticated users.

---

## 🛠 Tech Stack

**Frontend**
- React (with Hooks & Context API)
- Tailwind CSS
- Axios (API calls)
- React Router DOM (Routing)

**Backend** 
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

---

## 📂 Folder Structure

src/
│
├── components/ # Reusable UI components
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── SearchBar.jsx
│ ├── Sidebar.jsx
│ ├── TaskCard.jsx
│ └── TaskFilters.jsx
│
├── context/ # Global state
│ └── AuthContext.jsx
│
├── hooks/ # Custom hooks
│ └── useTasks.js
│
├── layout/ # Layout components
│ └── DashboardLayout.jsx
│
├── pages/ # Application pages
│ ├── Auth/
│ │ ├── Login.jsx
│ │ └── Register.jsx
│ ├── About.jsx
│ ├── CreateTask.jsx
│ ├── Dashboard.jsx
│ ├── EditTask.jsx
│ └── NotFound.jsx
│
├── services/ # API services
│ ├── apiPaths.js
│ ├── authService.js
│ ├── axiosInstance.jsx
│ └── taskService.js
│
├── utils/ # Utility functions
│
├── ProtectedRoute.jsx # Route protection component
└── App.jsx


---

## ⚙ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-manager-mern.git
   cd task-manager-mern/frontend
   Install dependencies


  npm install
  Set up environment variables
  Create a .env file in the frontend folder and configure:

  VITE_API_BASE_URL= https://task-manager-mern-a90b.onrender.com
  Start the development server
  npm run dev

🔑 Authentication Flow
AuthContext stores user and token in localStorage.
On page load, the profile is fetched if a valid token exists.
Protected routes are handled via ProtectedRoute.jsx.

📸 Screenshots
![Screenshot-1](/Screenshot-1.png)
![Screenshot-2](/Screenshot-2.png)


