const { calculateZodiac, generateKundli } = require('../utils/kundliCalculator');

let dailyHoroscopes = {};

const getHoroscope = (req, res) => {
    const { birthDate, birthTime, birthPlace, language } = req.body;
    const zodiac = calculateZodiac(birthDate);
    const horoscope = dailyHoroscopes[zodiac]?.[language] || "Horoscope not updated yet.";
    res.json({ zodiac, horoscope });
};

const getKundli = (req, res) => {
    const { birthDate, birthTime, birthPlace, language } = req.body;
    const kundli = generateKundli(birthDate, birthTime, birthPlace, language);
    res.json({ kundli });
};

const updateDailyHoroscopes = () => {
    const zodiacSigns = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"];
    zodiacSigns.forEach(sign => {
        dailyHoroscopes[sign] = {
            en: `Today's horoscope for ${sign} in English.`,
            hi: `आज का ${sign} राशिफल हिंदी में।`,
            bn: `আজকের ${sign} রাশিফল বাংলা।`
        };
    });
}

module.exports = { getHoroscope, getKundli, updateDailyHoroscopes };
