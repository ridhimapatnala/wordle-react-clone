const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Load db.json safely
let db = { solutions: [], letters: [] };
try {
  const dbPath = path.join(__dirname, 'data', 'db.json');
  db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
} catch (err) {
  console.error('Failed to load db.json:', err);
}

if (!db.solutions.length) {
  console.warn('Warning: No solutions loaded from db.json');
}

// API Endpoints
app.get('/solutions', (req, res) => {
  res.json(db.solutions);
});

app.get('/letters', (req, res) => {
  res.json(db.letters);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
