import { query } from '../config/db';

export class ExpenseRepository {
  // Fetch all expenses
  async findAll() {
    const sql = 'SELECT * FROM expenses ORDER BY created_at DESC;';
    return query(sql);
  }

  // Fetch an expense by its ID
  async findById(id: number) {
    const sql = 'SELECT * FROM expenses WHERE id = $1;';
    return query(sql, [id]);
  }
}
