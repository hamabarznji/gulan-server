import prisma from "../../PrismaInstance";
import { Prisma, Expense } from "@prisma/client";
class ExpenseService {
 

  async getExpenses(): Promise<Expense[]> {
    try {
      return await prisma.expense.findMany({
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      console.error('Error retrieving expenses:', error);
      throw new Error('Failed to retrieve expenses');
    }
  }


  // async getExpense(id: Expense["id"]): Promise<Expense | null> {
  //   try {
  //     return await prisma.expense.findUnique({
  //       where: {
  //         id,
  //       },
  //     });
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async updateExpense(
    id: string,
    expense: Prisma.ExpenseUpdateInput
  ): Promise<Expense | null> {
    try {
      return await prisma.expense.update({
        where: {
          id,
        },
        data: expense,
      });
    } catch (error) {
      console.error("Error updating expense:", error);
      throw error;
    }
  }


  async createExpense(expense: Prisma.ExpenseCreateInput): Promise<Expense> {
    try {
      return await prisma.expense.create({
        data: expense,
      });
    } catch (error) {
      console.error("Error creating expense:", error);
      throw error;
    }
  }


  async getTopExpenses(): Promise<Expense[]> {
    try {
      const expenses = await prisma.expense.findMany({
        include: {
          category: true,
        },
        orderBy: {
          amount: 'desc',
        },
      });

      return expenses;
    } catch (error) {
      throw new Error('Failed to retrieve expenses: ' + error.message);
    }
  }

  async  getExpenseSummaryReport() {
    

    try {
      const expenseSummary = await prisma.expense.groupBy({
        by: ['categoryId'],
        _sum: {
          amount: true,
        },
        _avg: {
          amount: true,
        },
      });

      const expenses=await prisma.expenseCategory.findMany()
      const expensesSummaryWithCategoryName=expenseSummary.map((expenseSum)=>{
        const {categoryId, }=expenseSum
        const categoryName=expenses.find((expense)=>expense.id===categoryId).name

        return {
          ...expenseSum,
          categoryName:categoryName
        
        }

      })
    
      return expensesSummaryWithCategoryName;

    } catch (error) {
      throw new Error('Failed to retrieve expenses: ' + error.message);
    }
  }
}

export default new ExpenseService();