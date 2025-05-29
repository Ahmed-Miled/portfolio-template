import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

/*
// server/db/index.js
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL || `postgresql://your_user:your_password@localhost:5432/portfolio_db`,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

export default pool;
*/