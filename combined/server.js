const express = require('express');
const cors = require('cors');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
// Default to development mode unless explicitly set to production
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors());
app.use(express.json());

// Heritage sites data
const heritageSites = {
  unesco: [
    {
      id: 1,
      name: 'Banavasi',
      location: 'Banavasi, Karnataka',
      description: 'Banavasi is an ancient temple town in Karnataka, known for its historical significance and archaeological importance. It was once the capital of the Kadamba dynasty.',
      wikipedia: 'https://en.wikipedia.org/wiki/Banavasi',
      category: 'Pre-historic'
    },
    {
      id: 2,
      name: 'Mirjan',
      location: 'Mirjan, Karnataka',
      description: 'Mirjan Fort is a historical fort located in Mirjan village. It is known for its architectural significance and historical importance dating back to ancient times.',
      wikipedia: 'https://en.wikipedia.org/wiki/Mirjan_Fort',
      category: 'Pre-historic'
    },
    {
      id: 3,
      name: 'Balligave',
      location: 'Balligave, Shimoga, Karnataka',
      description: 'Balligave is an ancient town in Shimoga district, known for its historical temples and archaeological sites. It was an important center during the medieval period.',
      wikipedia: 'https://en.wikipedia.org/wiki/Balligavi',
      category: 'Pre-historic'
    },
    {
      id: 4,
      name: 'Brahmagiri',
      location: 'Brahmagiri, Karnataka',
      description: 'Brahmagiri is an archaeological site known for its ancient rock inscriptions and historical significance. It contains evidence of early human settlements.',
      wikipedia: 'https://en.wikipedia.org/wiki/Brahmagiri_(archaeological_site)',
      category: 'Pre-historic'
    },
    {
      id: 5,
      name: 'Someshwara',
      location: 'Kurudumale, Karnataka',
      description: 'Someshwara Temple in Kurudumale is an ancient temple known for its architectural beauty and historical importance. It dates back to the Chola period.',
      wikipedia: 'https://en.wikipedia.org/wiki/Kurudumale',
      category: 'Pre-historic'
    }
  ],
  proposed: [
    {
      id: 1,
      name: 'Hirebenakal',
      location: 'Hirebenakal, Karnataka',
      description: 'Hirebenakal is a megalithic site known for its dolmens and ancient burial structures. It is one of the largest megalithic sites in South India.',
      wikipedia: 'https://en.wikipedia.org/wiki/Hirebenakal',
      category: 'Megalithic'
    },
    {
      id: 2,
      name: 'Lakkundi',
      location: 'Lakkundi, Karnataka',
      description: 'Lakkundi is a village known for its ancient temples and stepwells. It was an important center during the Western Chalukya period.',
      wikipedia: 'https://en.wikipedia.org/wiki/Lakkundi',
      category: 'Historical'
    }
  ]
};

// API Routes
app.get('/api/sites/unesco', (req, res) => {
  res.json(heritageSites.unesco);
});

app.get('/api/sites/proposed', (req, res) => {
  res.json(heritageSites.proposed);
});

app.get('/api/sites/unesco/:id', (req, res) => {
  const site = heritageSites.unesco.find(s => s.id === parseInt(req.params.id));
  if (!site) {
    return res.status(404).json({ error: 'Site not found' });
  }
  res.json(site);
});

app.get('/api/sites/proposed/:id', (req, res) => {
  const site = heritageSites.proposed.find(s => s.id === parseInt(req.params.id));
  if (!site) {
    return res.status(404).json({ error: 'Site not found' });
  }
  res.json(site);
});

// In production, serve static files from React build
if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  // Catch all handler: send back React's index.html file
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Backend API server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available at http://localhost:${PORT}/api/sites/*`);
  
  // In development mode, start React dev server
  if (NODE_ENV === 'development') {
    console.log(`\n⚛️  Starting React development server...`);
    console.log(`🌐 Frontend will be available at http://localhost:${CLIENT_PORT}\n`);
    
    const clientPath = path.join(__dirname, '../client');
    const reactServer = spawn('npm', ['start'], {
      cwd: clientPath,
      shell: true,
      stdio: 'inherit'
    });
    
    reactServer.on('error', (error) => {
      console.error('❌ Failed to start React dev server:', error);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down servers...');
      reactServer.kill();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      reactServer.kill();
      process.exit(0);
    });
  } else {
    console.log(`🌐 Frontend served from static build at http://localhost:${PORT}`);
  }
});

