const express = require('express');
const cors = require('cors');
const horoscopeRoutes = require('./routes/horoscope');
const cron = require('node-cron');
const { updateDailyHoroscopes } = require('./controllers/horoscopeController');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/horoscope', horoscopeRoutes);

cron.schedule('0 6 * * *', () => {
    console.log("Updating daily horoscopes...");
    updateDailyHoroscopes();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
