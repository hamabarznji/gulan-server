import prisma from "../../PrismaInstance";
import { Prisma, Expense } from "@prisma/client";
class ExpenseCategoriesService {
 

  async getExpenseCategories(): Promise<Expense[]> {
    try {
      return await prisma.expenseCategory.findMany();
    } catch (error) {
      console.error('Error retrieving expense categories:', error);
      throw new Error('Failed to retrieve expenses categories');
    }
  }


  



}

export default new ExpenseCategoriesService();