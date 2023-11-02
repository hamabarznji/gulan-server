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
      const { id } = req.body;

      const formattedExpenses = {
        id: id,
        categoryId: req.body.categoryId,
        description: req.body.description,
        amount: req.body.amount,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,

      }
      const expense = await ExpenseService.updateExpense(id, formattedExpenses);
      return res.json(expense);

    } catch (error) {

      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async getTopExpenses(req: Request, res: Response) {

    try {
      const expenses = await ExpenseService.getTopExpenses();
      const groupedExpenses: { [key: string]: any[] } = {};

      for (const categorizedExpense of expenses) {
        let categoryName = categorizedExpense['category'].name as string;

        if (categoryName in groupedExpenses) {

          groupedExpenses[categoryName].push(categorizedExpense);
        } else {
          groupedExpenses[categoryName] = [categorizedExpense];
        }
      }
      const summedGroupedExpenses: { [key: string]: number } = {};
      for (const category in groupedExpenses) {
        const expensesInCategory = groupedExpenses[category];
        const sum = expensesInCategory.reduce((acc, curr) => acc + curr.amount, 0);
        summedGroupedExpenses[category] = sum;
      }

      const sortedSummedGroupedExpensesArray = Object.entries(summedGroupedExpenses)
        .sort((a, b) => b[1] - a[1])
        .map(([category, sum]) => ({ category, sum }));
        const labels =sortedSummedGroupedExpensesArray.map((item)=>item.category)

      return res.status(200).json({data:sortedSummedGroupedExpensesArray,labels});

    } catch (error) {

      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async getExpenseSummaryReport(req: Request, res: Response) {

    try {

    
      const expenses = await ExpenseService.getExpenseSummaryReport();
      const summaryReport = expenses.map((expense) => {
        return{
          categoryName:expense.categoryName,
          sum:expense._sum.amount,
          avg:expense._avg.amount
        }
      })


      return res.json(summaryReport);

    } catch (error) {

      return res.status(500).json({ error: `Internal Server Error${error}` });
    }
  }

}

export default new ExpenseController();
