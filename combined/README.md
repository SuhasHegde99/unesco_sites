# Combined Development Environment

This directory contains a unified development setup that runs both the backend API server and frontend React development server together.

## Features

- ✅ Single command to start both server and client
- ✅ Backend API server on port 5000
- ✅ React development server on port 3000
- ✅ Automatic proxy configuration
- ✅ Hot reload for both frontend and backend

## Setup

### 1. Install Dependencies

From the project root, install dependencies for both server and client:

```bash
# Install backend dependencies
cd server
npm install
cd ..

# Install client dependencies
cd client
npm install
cd ..

# Install combined dependencies
cd combined
npm install
cd ..
```

### 2. Run Development Environment

From the `combined` directory:

```bash
cd combined
npm run dev
```

This will:
- Start the Express API server on `http://localhost:5000`
- Start the React development server on `http://localhost:3000`
- Automatically proxy API requests from frontend to backend

### 3. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/sites/unesco

## Scripts

- `npm run dev` - Start both servers in development mode
- `npm run dev:watch` - Start with nodemon for auto-restart on server changes
- `npm start` - Start in production mode (serves built React app)

## How It Works

1. **Development Mode** (`npm run dev`):
   - Express server runs on port 5000 (API endpoints)
   - React dev server runs on port 3000 (frontend with hot reload)
   - React dev server proxies `/api/*` requests to Express server

2. **Production Mode** (`npm start`):
   - Express server runs on port 5000
   - Serves static files from `../client/build`
   - All routes handled by Express server

## Project Structure

```
combined/
├── server.js          # Combined server (API + React dev server launcher)
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Notes

- The React development server is automatically started when running in development mode
- Both servers run in the same process, making it easy to manage
- Press `Ctrl+C` to stop both servers
- Make sure you have installed dependencies in both `server/` and `client/` directories

