import prisma from "../../PrismaInstance";
import { Prisma, Expense } from "@prisma/client";

class ExpenseService {
  async getExpenses(): Promise<Expense[]> {
    console.log("getExpenses");
    try {
      return await prisma.expense.findMany();
    } catch (error) {
      throw error;
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