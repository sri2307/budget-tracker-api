import { query } from '../config/db';

export class CategoryRepository {
  // Fetch all categories
  async findAll() {
    const sql = 'SELECT * FROM categories;';
    return query(sql);
  }
}
