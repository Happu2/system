# Mini User Management System

A full-stack web application built as part of the **Purple Merit Technologies – Backend Developer Intern Assessment**.  
The system provides secure user authentication, role-based access control (RBAC), and user lifecycle management with separate admin and user functionalities.

---

## 🔗 Live Deployment

- **Frontend (Netlify):** https://marvelous-sprinkles-9db837.netlify.app/login
- **Backend API (Render):** https://user-management-system-backend-pf5h.onrender.com

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon – cloud hosted)
- JWT Authentication
- bcrypt (password hashing)
- Jest & Supertest (testing)

### Frontend
- React (Hooks)
- Vite
- Tailwind CSS
- React Router DOM

### Deployment
- Backend: Render
- Frontend: Netlify
- Database: Neon PostgreSQL

---

## ✨ Features

### Authentication
- User signup with email, password, full name
- Email & password validation
- JWT-based authentication
- Secure login/logout

### User Features
- View own profile
- Update name & email
- Change password

### Admin Features
- View all users (pagination)
- Activate / deactivate users
- Role-based access control

### Security
- Password hashing with bcrypt
- Protected routes
- Role-based authorization (admin/user)
- Environment variables for secrets

---

## 📂 Project Structure

```
user-management-system/
├── backend/
├── frontend/
└── README.md
```

---

## ⚙️ Setup Instructions

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_jwt_secret
```

### Frontend (Netlify / local .env)
```
VITE_API_URL=https://user-management-system-backend-pf5h.onrender.com/api
```

---

## 📡 API Documentation

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### User
- `GET /api/user/me` - Get current user profile
- `PUT /api/user/me` - Update user profile
- `PUT /api/user/me/password` - Change password

### Admin
- `GET /api/admin/users?page=1` - Get all users (paginated)
- `PATCH /api/admin/users/:id/status` - Activate/deactivate user

---

## 🧪 Testing

- Implemented 5+ unit tests
- Tools used: Jest, Supertest
- Tests cover authentication & validation logic

Run tests:
```bash
npm test
```

---


## ✅ Status

- ✔ Backend deployed
- ✔ Frontend deployed
- ✔ Database cloud hosted
- ✔ All requirements implemented

---

**Thank you for reviewing this project!**
