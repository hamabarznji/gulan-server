import prisma from "../../PrismaInstance";
import { Prisma, Expense } from "@prisma/client";
import convertDateStringToDate from "../../utils/convertDateStringToDate";
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
}

export default new ExpenseService();