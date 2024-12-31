import { query } from '../config/db';

export class ExpenseRepository {
  // Fetch all expenses
  async findAll() {
    const sql = 'SELECT * FROM expenses ORDER BY created_at DESC;';
    return query(sql);
  }

  // Fetch an expense by ID
  async findById(id: number) {
    const sql = 'SELECT * FROM expenses WHERE id = $1;';
    return query(sql, [id]);
  }

  // Create a new expense
  async create(expenseData: any) {
    const { name, date, place, categoryId, paymentModeId, payerId, amount } = expenseData;
    const sql = `
      INSERT INTO expenses (name, date, place, category_id, payment_mode_id, payer_id, amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const result = await query(sql, [
      name,
      date,
      place,
      categoryId,
      paymentModeId,
      payerId,
      amount,
    ]);
    return result[0];
  }

  // Update an expense
  async update(id: string, expenseData: any) {
    const { name, date, place, categoryId, paymentModeId, payerId, amount } = expenseData;
    const sql = `
      UPDATE expenses 
      SET name = $1, date = $2, place = $3, category_id = $4, payment_mode_id = $5, payer_id = $6, amount = $7
      WHERE id = $8
      RETURNING *;
    `;
    const result = await query(sql, [
      name,
      date,
      place,
      categoryId,
      paymentModeId,
      payerId,
      amount,
      id,
    ]);
    return result[0];
  }

  // Delete an expense
  async delete(id: string) {
    const sql = 'DELETE FROM expenses WHERE id = $1 RETURNING *;';
    const result = await query(sql, [id]);
    return result[0];
  }

  // Get user details
  async findUserById(id: string) {
    const sql = 'SELECT * FROM users WHERE id = $1;';
    const result = await query(sql, [id]);
    return result[0];
  }
}
