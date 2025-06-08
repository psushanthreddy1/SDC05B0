// server.js
const express = require('express'); // Add space between 'const' and 'express'
const axios = require('axios'); // Add space between 'const' and 'axios'

const app = express(); // Add space between 'const' and 'app'
const port = 3000; // Add space between 'const' and 'port'

app.use(express.static('public')); // Serving static files from the 'public' folder

app.get('/weather/:city', async (req, res) => {
  const { city } = req.params; // Add space between 'const' and 'city'

  try {
    const apiKey = 'c37e74aaadd195e99c60c5ca8dbc20c8'; // Add space between 'const' and 'apiKey'
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`); // Correct spacing here as well
    console.log(response);
    const temperature = response.data.main.temp; // Add space between 'const' and 'temperature'
    res.json({ temperature }); // Sending the temperature as JSON response
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Error response
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`); // Start the server
});

