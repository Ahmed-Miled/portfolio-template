// server/routes/experiences.js
import express from 'express';
import pool from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM experiences');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching experiences:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
