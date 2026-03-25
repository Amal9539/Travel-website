<div align="center">

# 🌍 TravelNest

**Discover. Plan. Explore.**

A full-stack travel booking and exploration platform built with the MERN stack — helping wanderers find exotic destinations, plan detailed itineraries, and manage bookings seamlessly.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Live Demo](#) · [Report Bug](issues) · [Request Feature](issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌐 About the Project

TravelNest is a modern, full-featured travel booking platform designed to make travel discovery and booking effortless. Whether you're looking for a quick weekend getaway or a month-long international adventure, TravelNest connects users with curated travel packages, complete with itineraries, pricing, and instant booking.

The platform includes a fully featured **Admin Dashboard** for travel managers to manage packages in real-time, and a smooth user-facing experience optimized for all screen sizes.

---

## ✨ Features

### 👤 User-Facing
- **Authentication** — Secure sign up / login with JWT-based session management
- **Destination Discovery** — Browse curated travel packages with rich images, descriptions, and highlights
- **Detailed Itineraries** — Day-by-day breakdowns of each travel package
- **Booking System** — Select travel dates, party size, and complete bookings via integrated forms
- **My Bookings** — Users can view and manage their upcoming trips from a personal dashboard
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop

### 🛠️ Admin Panel
- **Package Management** — Full CRUD: create, update, and delete travel packages
- **Booking Overview** — View and manage all customer bookings
- **Image Uploads** — Add high-quality imagery to packages
- **Protected Routes** — Admin-only access enforced on both frontend and backend

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS / Bootstrap |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Auth** | JSON Web Tokens (JWT) |
| **State Management** | Context API / Redux |
| **HTTP Client** | Axios |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/travelnest.git
   cd travelnest
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the `/backend` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d
   NODE_ENV=development
   ```

4. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Configure frontend environment**

   Create a `.env` file in the `/frontend` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

6. **Run the development servers**

   In the `/backend` directory:
   ```bash
   npm run dev
   ```

   In the `/frontend` directory:
   ```bash
   npm start
   ```

   The app will be live at `http://localhost:3000`

---

## 📁 Project Structure

```
travelnest/
├── backend/
│   ├── controllers/        # Route handler logic
│   ├── middleware/         # Auth, error handling
│   ├── models/             # Mongoose schemas
│   │   ├── User.js
│   │   ├── Package.js
│   │   └── Booking.js
│   ├── routes/             # Express route definitions
│   │   ├── authRoutes.js
│   │   ├── packageRoutes.js
│   │   └── bookingRoutes.js
│   ├── utils/              # Helpers and utilities
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/         # Images, icons
│       ├── components/     # Reusable UI components
│       ├── context/        # Context API / Redux store
│       ├── pages/          # Route-level page components
│       │   ├── Home.jsx
│       │   ├── Destinations.jsx
│       │   ├── PackageDetail.jsx
│       │   ├── Booking.jsx
│       │   └── admin/
│       │       └── Dashboard.jsx
│       ├── services/       # Axios API calls
│       ├── App.jsx
│       └── main.jsx
│
└── README.md
```

---

## 📡 API Reference

### Auth

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT |

### Packages

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/api/packages` | Get all travel packages | ❌ |
| `GET` | `/api/packages/:id` | Get single package | ❌ |
| `POST` | `/api/packages` | Create a package | ✅ Admin |
| `PUT` | `/api/packages/:id` | Update a package | ✅ Admin |
| `DELETE` | `/api/packages/:id` | Delete a package | ✅ Admin |

### Bookings

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/api/bookings` | Create a booking | ✅ User |
| `GET` | `/api/bookings/my` | Get user's bookings | ✅ User |
| `GET` | `/api/bookings` | Get all bookings | ✅ Admin |

---

## 📸 Screenshots

> _Add screenshots here once the app is deployed._

| Home Page | Destination Detail | Admin Dashboard |
|---|---|---|
| ![Home](#) | ![Detail](#) | ![Admin](#) |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add: your feature description'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code follows the existing style conventions and passes any existing tests.

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Built with ❤️ by [Your Name](https://github.com/your-username)

⭐ Star this repo if you found it helpful!

</div>
