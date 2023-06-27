import ExpenseService from '../services/ExpenseService';
import { Request, Response } from 'express';
import convertDateStringToDate from '../../utils/convertDateStringToDate';
class ExpenseController {
  async getExpenses(req: Request, res: Response) {
    try {
      const expenses = await ExpenseService.getExpenses();
      const formattedExpenses = expenses.map((expense) => {
        return {
          id: expense.id,
          categoryId: expense.categoryId,
          description: expense.description,
          amount: expense.amount,
          createdAt: expense.createdAt,
          updatedAt: expense.updatedAt,
          categoryName: (expense as any).category?.name,
        };
      });
      res.json(formattedExpenses);
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
    const { createdAt, ...data } = req.body;
    try {
      const expenseData = {

        categoryId: "ecdd7f00-ed82-45cf-aa19-927f74a455cb",
        createdAt: convertDateStringToDate(createdAt),
        ...data
      };

      const expense = await ExpenseService.createExpense(expenseData);

      if (!expense) {
        return res.status(400).json({
          error: 'Bad Request'
        });
      }

      res.json(expense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateExpense(req: Request, res: Response) {
   
    try {
      const { id} = req.body;

      const formattedExpenses={
        id:id,
        categoryId: req.body.categoryId,
        description: req.body.description,
        amount: req.body.amount,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        
      }
      const expense = await ExpenseService.updateExpense(id,formattedExpenses);
      return res.json(expense);

    } catch (error) {

      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }






}

export default new ExpenseController();
