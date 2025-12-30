# Backend – User Management System

This is the backend service for the Mini User Management System, built using Node.js, Express, and PostgreSQL.

---

## 🧱 Tech Stack

- Node.js
- Express.js
- PostgreSQL (Neon)
- JWT Authentication
- bcrypt (password hashing)
- Jest & Supertest (testing)

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_jwt_secret
```

---

## 📡 API Routes

### Auth

- `POST /api/auth/signup` - Register new user
  - Body: `{ email, password, fullName }`
  - Returns: JWT token

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: JWT token

### User

- `GET /api/user/me` - Get current user profile
  - Requires: JWT token
  - Returns: User details

- `PUT /api/user/me` - Update user profile
  - Requires: JWT token
  - Body: `{ fullName, email }`

- `PUT /api/user/me/password` - Change password
  - Requires: JWT token
  - Body: `{ currentPassword, newPassword }`

### Admin

- `GET /api/admin/users` - Get all users (paginated)
  - Requires: Admin JWT token
  - Query: `?page=1`

- `PATCH /api/admin/users/:id/status` - Activate/deactivate user
  - Requires: Admin JWT token
  - Body: `{ isActive: true/false }`

---

## 🧪 Testing

Run tests:

```bash
npm test
```

Tests include:
- Authentication validation
- Password hashing
- JWT generation
- API endpoint security

---

## 🚀 Deployment

Deployed on **Render** with environment variables configured in the dashboard.

**Live API:** https://user-management-system-backend-pf5h.onrender.com

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "pg": "^8.x",
  "jsonwebtoken": "^9.x",
  "bcrypt": "^5.x",
  "dotenv": "^16.x",
  "cors": "^2.x"
}
```

---

## 🛠️ Development

Start development server:
```bash
npm run dev
```

Run in production mode:
```bash
npm start
```
