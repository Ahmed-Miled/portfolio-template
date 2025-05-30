// routes/education.js
const express = require('express');
const router = express.Router();
const pool = require('../db/index.js'); // PostgreSQL connection

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY start_date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching education:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
