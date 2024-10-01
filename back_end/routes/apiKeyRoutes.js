const express = require('express');
const router = express.Router();
const { verifyApiKey } = require('../middlewares/authApiKey');

router.get('/get-api-key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

module.exports = router;    