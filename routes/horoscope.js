const express = require('express');
const router = express.Router();
const { getHoroscope, getKundli } = require('../controllers/horoscopeController');

router.post('/get-zodiac', getHoroscope);
router.post('/get-kundli', getKundli);

module.exports = router;
