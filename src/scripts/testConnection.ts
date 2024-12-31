import { query } from '../config/db';

const testConnection = async () => {
  try {
    const result = await query('SELECT NOW()');
    console.log('Database connected successfully:', result[0]);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

testConnection();
