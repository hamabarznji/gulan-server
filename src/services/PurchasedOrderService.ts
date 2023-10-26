import prisma from "../../PrismaInstance";
import { Prisma, PurchaseOrder, Item, purchasedItem } from "@prisma/client";
const { v4: uuidv4 } = require('uuid');
class PurchasedOrderService {


  async addPurchaseOrder(data: any): Promise<[]> {
    const uniqueId = uuidv4();
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}`;

    console.log(formattedDate);



    try {
      const order = await prisma.purchaseOrder.create({
        data: {
          id: uniqueId,
        }
      })
      if (!order) {
        throw new Error('Failed to create purchased order');
      }
      const refactoredData = data?.map((item) => {
        return {
          ...item,
          purchase_order_id: order.id,
          item_id: item.item_id.toString()
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
      console.error('Error retrieving purchased orders:', error);
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



}

export default new PurchasedOrderService();