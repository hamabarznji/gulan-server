import ExpenseCategoryService from '../services/ExpenseCategoryService';
import { Request, Response } from 'express';
class ExpenseCategoryController {
  async getExpenseCategories(req: Request, res: Response) {
    try {
      const expenseCategories = await ExpenseCategoryService.getExpenseCategories();
      
      res.json(expenseCategories);
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }






}

export default new ExpenseCategoryController();
