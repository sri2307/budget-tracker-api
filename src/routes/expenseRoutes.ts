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

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Fetch all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: A list of all expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   date:
 *                     type: string
 *                     format: date
 *                   place:
 *                     type: string
 *                   category:
 *                     type: string
 *                   paymentMode:
 *                     type: string
 *                   amount:
 *                     type: number
 */
expenseRouter.get('/', getExpenses);

/**
 * @swagger
 * /expenses/add-expense:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               place:
 *                 type: string
 *               category:
 *                 type: string
 *               paymentMode:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Expense created successfully
 */
expenseRouter.post('/add-expense', createExpense);

/**
 * @swagger
 * /expenses/categories:
 *   get:
 *     summary: Fetch all expense categories
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: A list of expense categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
expenseRouter.get('/categories', getCategories);

/**
 * @swagger
 * /expenses/payment-modes:
 *   get:
 *     summary: Fetch all payment modes
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: A list of payment modes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
expenseRouter.get('/payment-modes', getPaymentModes);

/**
 * @swagger
 * /expenses/user/{id}:
 *   get:
 *     summary: Fetch user details by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 */
expenseRouter.get('/user/:id', getUser);

/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Edit an expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The expense ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               place:
 *                 type: string
 *               category:
 *                 type: string
 *               paymentMode:
 *                 type: string
 *               amount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Expense updated successfully
 */
expenseRouter.put('/:id', editExpense);

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The expense ID
 *     responses:
 *       204:
 *         description: Expense deleted successfully
 */
expenseRouter.delete('/:id', deleteExpense);

/**
 * @swagger
 * /expenses/{id}:
 *   get:
 *     summary: Fetch a single expense by ID
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The expense ID
 *     responses:
 *       200:
 *         description: Expense details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date
 *                 place:
 *                   type: string
 *                 category:
 *                   type: string
 *                 paymentMode:
 *                   type: string
 *                 amount:
 *                   type: number
 */
expenseRouter.get('/:id', getExpense);

export { expenseRouter };
