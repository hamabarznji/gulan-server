import prisma from "../../PrismaInstance";
import { Prisma, ItemCategory } from "@prisma/client";
class ItemCategoryService {
 

  async getCategories(): Promise<ItemCategory[]> {
    try {
      return await prisma.itemCategory.findMany();
    } catch (error) {
      console.error('Error retrieving categories:', error);
      throw new Error('Failed to retrieve expenses');
    }
  }


}

export default new ItemCategoryService();