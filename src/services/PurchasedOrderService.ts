import prisma from "../../PrismaInstance";
import { Prisma, PurchaseOrder, Item, purchasedItem } from "@prisma/client";
const { v4: uuidv4 } = require('uuid');
class PurchasedOrderService {


  async addPurchaseOrder(data: any): Promise<[]> {

    const uniqueId = uuidv4();
    try {
      const order = await prisma.purchaseOrder.create({
        data: {
          id: uniqueId,
        }
      })
      if (!order) {
        throw new Error('Failed to create purchased order');
      }
      const refactoredData = data?.map((item:any) => {
        return {
          
          purchase_order_id: order.id,
          item_id: item.item_id.toString(),
          price: parseFloat(item.price),
          qty:parseInt(item.qty)
          
        }
      }
      )
      const addedItems = await prisma.purchasedItem.createMany({
        data: refactoredData
      })
      if (!addedItems) throw new Error('Failed to create purchased order');
      return addedItems;
    } catch (error) {
      console.error('Error creating purchased order:', error);
      throw new Error('Failed to create purchased order');
    }
  }

  async getPurchasedOrders(): Promise<PurchaseOrder[]> {
    try {
      return await prisma.PurchaseOrder.findMany();
    } catch (error) {
      throw new Error('Failed to retrieve purchased orders');
    }
  }
  async getItemsByPurchasedOrder(id: string): Promise<purchasedItem[]> {
    try {
      return await prisma.purchasedItem.findMany({
        where: {
          purchase_order_id: id,
        },
        include: {
          item: {
            include: {
              category: true,
              size: true,
              color: true,
            },


          },
        },
      });
    } catch (error) {
      throw new Error('Failed to retrieve purchased orders');
    }
  }


  async updatePurchasedItem(
    id: string,
    data: any
  ): Promise<purchasedItem | null> { 
    try {
      return await prisma.purchasedItem.update({
        where: {
          id,
        },
        data: data,
      });
    } catch (error) {
      console.error("Error Updating Item:", error);
      throw error;
    }
  }
  
}


export default new PurchasedOrderService();