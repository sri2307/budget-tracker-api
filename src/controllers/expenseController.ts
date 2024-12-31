import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/categoryRepository';
import { ExpenseRepository } from '../repositories/expenseRepository';
import { PaymentModeRepository } from '../repositories/paymentModeRepository';

const expenseRepo = new ExpenseRepository();
const categoryRepo = new CategoryRepository();
const paymentModeRepo = new PaymentModeRepository();

// Get all expenses
export const getExpenses = async (req: Request, res: Response): Promise<void> => {
  try {
    const expenses = await expenseRepo.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a single expense by ID
export const getExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const expense = await expenseRepo.findById(Number(id));
    if (expense) {
      res.status(200).json(expense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    console.error('Error fetching expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all categories
export const getCategories = async (req: Request, res: Response): Promise<void> => {
  try {
    const categories = await categoryRepo.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all payment modes
export const getPaymentModes = async (req: Request, res: Response): Promise<void> => {
  try {
    const paymentModes = await paymentModeRepo.findAll();
    res.status(200).json(paymentModes);
  } catch (error) {
    console.error('Error fetching payment modes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create an expense
export const createExpense = async (req: Request, res: Response): Promise<void> => {
  const { name, date, place, categoryId, paymentModeId, payerId, amount } = req.body;
  try {
    const newExpense = await expenseRepo.create({
      name,
      date,
      place,
      categoryId,
      paymentModeId,
      payerId,
      amount,
    });
    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Edit an expense
export const editExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, date, place, categoryId, paymentModeId, payerId, amount } = req.body;
  try {
    const updatedExpense = await expenseRepo.update(id, {
      name,
      date,
      place,
      categoryId,
      paymentModeId,
      payerId,
      amount,
    });
    if (updatedExpense) {
      res.status(200).json(updatedExpense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    console.error('Error editing expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete an expense
export const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedExpense = await expenseRepo.delete(id);
    if (deletedExpense) {
      res.status(200).json({ message: 'Expense deleted successfully' });
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get user details
export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await expenseRepo.findUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
