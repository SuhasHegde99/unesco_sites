# Karnataka Heritage Sites Web Application

A full-stack web application showcasing Karnataka UNESCO World Heritage Sites and Proposed UNESCO Heritage Sites.

## Features

- **Home Page**: Two main options to explore UNESCO and Proposed sites
- **Site Lists**: Browse through heritage sites in each category
- **Site Details**: Detailed information about each site with Wikipedia links
- **Media Gallery**: Photo and video sections for each category
- **Wikipedia Integration**: Direct links to Wikipedia pages

## Project Structure

```
karnataka-heritage-sites/
├── server/                # Backend Express server
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── client/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json       # Frontend dependencies
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

## Running the Application

### Development Mode

1. **Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the React app:**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Start the server:**
   ```bash
   cd server
   npm start
   ```

## Heritage Sites

### UNESCO World Heritage Sites (5 sites)
1. Banavasi
2. Mirjan
3. Balligave (Shimoga)
4. Brahmagiri
5. Someshwara (Kurudumale)

### Proposed UNESCO Heritage Sites (2 sites)
1. Hirebenakal
2. Lakkundi

## API Endpoints

- `GET /api/sites/unesco` - Get all UNESCO sites
- `GET /api/sites/proposed` - Get all proposed sites
- `GET /api/sites/unesco/:id` - Get specific UNESCO site
- `GET /api/sites/proposed/:id` - Get specific proposed site

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React, React Router
- **Styling**: CSS3 with modern design

## License

ISC

