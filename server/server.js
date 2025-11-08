const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

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

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

