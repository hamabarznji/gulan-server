import prisma from "../../PrismaInstance";
import { Prisma, PurchaseOrder,Item,purchasedItem } from "@prisma/client";
class PurchasedOrderService {

  
  async getPurchasedOrders(): Promise<PurchaseOrder[]> {
    try {
      return await prisma.PurchaseOrder.findMany({
        include:{
          vendor:{
            select:{
              name:true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error retrieving purchased orders:', error);
      throw new Error('Failed to retrieve purchased orders');
    }
  }
  async getItemsByPurchasedOrder(id:string): Promise<purchasedItem[]> {
    try {
      return await prisma.purchasedItem.findMany({
        where: {
          purchase_order_id: id,
        },
        include: {
          item: true,
        }
      });
      
    } catch (error) {
      console.error('Error retrieving purchased orders:', error);
      throw new Error('Failed to retrieve purchased orders');
    }
  }

  
}

export default new PurchasedOrderService();