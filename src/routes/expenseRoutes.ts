import { Router } from 'express';
import {
  getExpenses,
  getExpense,
  createExpense,
  editExpense,
  deleteExpense,
  getCategories,
  getPaymentModes,
  getUser,
} from '../controllers/expenseController';

const expenseRouter = Router();

// Route to fetch all expenses
expenseRouter.get('/', getExpenses);

// Route to create a new expense
expenseRouter.post('/add-expense', createExpense);

// Route to fetch all categories
expenseRouter.get('/categories', getCategories);

// Route to fetch all payment modes
expenseRouter.get('/payment-modes', getPaymentModes);

// Route to get user details by ID
expenseRouter.get('/user/:id', getUser);

// Route to edit an expense
expenseRouter.put('/:id', editExpense);

// Route to delete an expense
expenseRouter.delete('/:id', deleteExpense);

// Route to fetch a single expense by ID
expenseRouter.get('/:id', getExpense);

export { expenseRouter };
