const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for frontend
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Define the /api/translate route
app.post('/api/translate', (req, res) => {
  const { message, targetLanguage } = req.body;
  console.log(`Received message: ${message}, targetLanguage: ${targetLanguage}`);

  // Dummy translation logic (you can replace it with a real translation API)
  const translatedMessage = `Translated message: "${message}" to ${targetLanguage}`;
  res.json({ translatedMessage });
});

// Set up the backend to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
