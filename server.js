require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { searchTracks } = require('./main');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/search', async (req, res) => {
    const query = req.body.query;
    if (!query) {
        return res.status(400).json({ error: 'Please provide a song or artist name.' });
    }

    try {
        const results = await searchTracks(query);
        res.json({ results });
    } catch (err) {
        console.error('Error searching Spotify tracks:', err);
        res.status(500).json({ error: 'Could not fetch results. Please try again later.' });
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
