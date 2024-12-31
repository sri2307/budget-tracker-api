import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.EXPENSE_TRACKER_USER,        // Your PostgreSQL username
  host: process.env.EXPENSE_TRACKER_HOST,        // Your PostgreSQL host
  database: process.env.EXPENSE_TRACKER_DATABASE,// Your PostgreSQL database
  password: process.env.EXPENSE_TRACKER_PASSWORD,// Your PostgreSQL password
  port: +(process.env.EXPENSE_TRACKER_PORT || 5432), // PostgreSQL port, default is 5432
  ssl: {
    rejectUnauthorized: false, // Required for Vercel-hosted databases
  },
});

export const query = async (text: string, params?: any[]) => {
  const result = await pool.query(text, params);
  return result.rows;
};
