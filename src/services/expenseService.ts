import { ExpenseRepository } from '../repositories/expenseRepository';

const expenseRepository = new ExpenseRepository();

export class ExpenseService {
  // Fetch all expenses
  async getAllExpenses() {
    return expenseRepository.findAll();
  }

  // Fetch expense by ID
  async getExpenseById(id: number) {
    return expenseRepository.findById(id);
  }

  //Fetch all categories
  async getAllCategories() {
    return expenseRepository.findAllCategories();
  }
}
