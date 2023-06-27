import ExpenseService from '../services/ExpenseService';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
class ExpenseController {
  async getExpenses(req: Request, res: Response) {
    console.log('getExpenses');
    try {
      const expenses = await ExpenseService.getExpenses();

      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // async getExpense(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;
  //     const expense = await ExpenseService.getExpense(id);
  //     if (!expense) {
  //       return res.status(404).json({ error: 'Expense not found' });
  //     }
  //     res.json(expense
  //     );
  //   } catch (error) {
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }


  async createExpense(req: Request, res: Response) {
    try {

      const user = await ExpenseService.createExpense(
        req.body);
      if (!user) {
        return res.status(400).json({
          error: 'Bad Request'
        });

      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  // async updateExpense(req: Request, res: Response) {
  //   try {
  //     const { id } = req.body;
  //     const expense = await ExpenseService.(id, ...req.body);
  //     return res.json(expense);

  //   } catch (error) {
  //     return res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }






}

export default new ExpenseController();
