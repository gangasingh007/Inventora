# Inventora

A modern e-commerce platform with authentication, user management, and a beautiful frontend built with React, Recoil, and Express.js.

## Features
- User registration and login with JWT authentication
- Protected routes (frontend and backend)
- Modern UI with theme toggle (dark/light)
- Profile page and navigation
- Product showcase and testimonials

## Tech Stack
- **Frontend:** React, Recoil, React Router, Swiper, Lucide Icons, react-hot-toast
- **Backend:** Node.js, Express.js, MongoDB, JWT, bcryptjs

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Inventora
   ```

2. **Install dependencies:**
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**
   - In `server/`, create a `.env` file:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. **Run the backend server:**
   ```sh
   cd server
   npm start
   ```

5. **Run the frontend app:**
   ```sh
   cd client
   npm start
   ```

6. **Visit** `http://localhost:3000` in your browser.

## Project Structure

```
Inventora/
├── client/         # React frontend
├── server/         # Express backend
│   ├── controller/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── ...
├── package.json
└── README.md
```

## Scripts
- `npm start` — Start the server or client
- `npm run dev` — (if available) Start in development mode

## License
MIT

---
**Made with ❤️ for Hackathons!**
