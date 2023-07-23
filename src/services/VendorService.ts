import prisma from "../../PrismaInstance";
import { Prisma, Vendor } from "@prisma/client";
class VendorService {


  async getVendors(): Promise<Vendor[]> {
    try {
      return await prisma.vendor.findMany();
    } catch (error) {
      console.error('Error retrieving vendors:', error);
      throw new Error('Failed to retrieve vendors');
    }
  }
  async addVendor(vendor: Prisma.UserCreateInput): Promise<Vendor> {
    try {
      return await prisma.vendor.create({
        data: vendor,
      });
    } catch (error) {
      console.error("Error creating vendor:", error);
      throw error;
    }
  }
  async updateVendor(
    id: string,
    vendor: Prisma.VendorUpdateInput
  ): Promise<Vendor | null> {
    try {
      return await prisma.vendor.update({
        where: {
          id,
        },
        data: vendor,
      });
    } catch (error) {
      console.error("Error updating vendor:", error);
      throw error;
    }
  }
}

export default new VendorService();