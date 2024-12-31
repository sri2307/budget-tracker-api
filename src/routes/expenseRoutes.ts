import { Router } from 'express';
import { getExpenses, getExpense } from '../controllers/expenseController';

const expenseRouter = Router();

// Route to fetch all expenses
expenseRouter.get('/', getExpenses);

// Route to fetch a single expense by ID
expenseRouter.get('/:id', getExpense);

export { expenseRouter };
