import { Request, Response, RequestHandler } from 'express';
import { ExpenseService } from '../services/expenseService';

const expenseService = new ExpenseService();

// Endpoint to get all expenses
export const getExpenses: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const expenses = await expenseService.getAllExpenses();
    res.status(200).json(expenses); // Sending response, no return here
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Endpoint to get an expense by ID
export const getExpense: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const expense = await expenseService.getExpenseById(parseInt(id));
    if (expense.length === 0) {
      res.status(404).json({ message: 'Expense not found' });
      return; // Ensure no further execution after response
    }
    res.status(200).json(expense[0]);
  } catch (error) {
    console.error('Error fetching expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
