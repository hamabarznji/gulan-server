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


}

export default new VendorService();