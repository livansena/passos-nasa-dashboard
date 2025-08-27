require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.NASA_API_KEY;

const BASE_URL = '/projetos/nasapanel';

app.use(BASE_URL, express.static(path.join(__dirname, 'public')));

app.get(BASE_URL, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get(BASE_URL + '/apod', async (req, res) => {
    const date = req.query.date || '';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    try {
        const apiResponse = await fetch(url);
        if (!apiResponse.ok) {
            throw new Error('Failed to fetch data from NASA API.');
        }
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('API request error:', error);
        res.status(500).json({ error: 'Error fetching data from the NASA API.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});