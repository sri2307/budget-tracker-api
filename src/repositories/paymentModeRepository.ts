import { query } from '../config/db';

export class PaymentModeRepository {
  // Fetch all payment modes
  async findAll() {
    const sql = 'SELECT * FROM payment_modes;';
    return query(sql);
  }
}
