// routes/education.js

import express from 'express';
import pool from '../db/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM education ORDER BY start_date DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching education:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
