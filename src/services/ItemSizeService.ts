import prisma from "../../PrismaInstance";
import { Prisma, Size } from "@prisma/client";
class ItemSizeService {
 

  async getSizes(): Promise<Size[]> {
    try {
      return await prisma.size.findMany();
    } catch (error) {
      console.error('Error retrieving sizes:', error);
      throw new Error('Failed to retrieve sizes');
    }
  }
  



}

export default new ItemSizeService();