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
  async addItemCategory(category: Prisma.UserCreateInput): Promise<ItemCategory> {
    try {
      return await prisma.itemCategory.create({
        data: category,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }


  async updateItemCategory(
    id: string,
    category: Prisma.ItemCategoryUpdateInput
  ): Promise<ItemCategory | null> {
    try {
      return await prisma.itemCategory.update({
        where: {
          id,
        },
        data: category,
      });
    } catch (error) {
      console.error("Error updating category:", error);
      throw error;
    }
  }
}

export default new ItemCategoryService();