import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { expenseRouter } from './routes/expenseRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/api/expenses', expenseRouter);

export { app };
