import prisma from "../../PrismaInstance";
import { Prisma, Size } from "@prisma/client";
class SizeService {


  async getSizes(): Promise<Size[]> {
    try {
      return await prisma.size.findMany();
    } catch (error) {
      console.error('Error retrieving sizes:', error);
      throw new Error('Failed to retrieve sizes');
    }
  }
  async addSize(size: Prisma.SizeUpdateInput): Promise<Size> {
    try {
      return await prisma.size.create({
        data: size,
      });
    } catch (error) {
      console.error("Error creating size:", error);
      throw error;
    }
  }
  async updateSize(
    id: string,
    size: Prisma.SizeUpdateInput
  ): Promise<Size | null> {
    try {
      return await prisma.size.update({
        where: {
          id,
        },
        data: size,
      });
    } catch (error) {
      console.error("Error updating size:", error);
      throw error;
    }
  }
}

export default new SizeService();