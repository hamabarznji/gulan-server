import prisma from "../../PrismaInstance";
import { Prisma, Color } from "@prisma/client";
class VendorService {


  async getColors(): Promise<Color[]> {
    try {
      return await prisma.color.findMany();
    } catch (error) {
      console.error('Error retrieving colors:', error);
      throw new Error('Failed to retrieve colors');
    }
  }
  async addColor(color: Prisma.Color$itemsArgs): Promise<Color> {
    try {
      return await prisma.color.create({
        data: color,
      });
    } catch (error) {
      console.error("Error creating color:", error);
      throw error;
    }
  }
  async updateColor(
    id: string,
    color: Prisma.ColorUpdateInput
  ): Promise<Color | null> {
    try {
      return await prisma.color.update({
        where: {
          id,
        },
        data: color,
      });
    } catch (error) {
      console.error("Error updating color:", error);
      throw error;
    }
  }
}

export default new VendorService();