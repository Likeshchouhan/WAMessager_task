const express = require('express');
const router = express.Router();
const axios = require('axios');

// Dummy translation API
router.post('/', async (req, res) => {
  const { message, targetLanguage } = req.body;
  
  // Dummy translation response
  const translatedMessage = `[Translated to ${targetLanguage}]: ${message}`;
  
  res.json({ translatedMessage });
});

module.exports = router;
