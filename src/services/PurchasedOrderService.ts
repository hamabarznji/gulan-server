import prisma from "../../PrismaInstance";
import { Prisma, PurchaseOrder } from "@prisma/client";
class PurchasedOrderService {

  
  async getPurchasedOrders(): Promise<PurchaseOrder[]> {
    try {
      return await prisma.PurchaseOrder.findMany();
    } catch (error) {
      console.error('Error retrieving purchased orders:', error);
      throw new Error('Failed to retrieve purchased orders');
    }
  }
  
}

export default new PurchasedOrderService();