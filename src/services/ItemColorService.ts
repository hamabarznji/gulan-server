import prisma from "../../PrismaInstance";
import { Prisma, Color } from "@prisma/client";
class ItemColorService {
 

  async getColors(): Promise<Color[]> {
    try {
      return await prisma.color.findMany();
    } catch (error) {
      console.error('Error retrieving colors:', error);
      throw new Error('Failed to retrieve colors');
    }
  }
  



}

export default new ItemColorService();