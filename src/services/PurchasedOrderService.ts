import prisma from "../../PrismaInstance";
import { Prisma, PurchaseOrder, Item, purchasedItem } from "@prisma/client";
class PurchasedOrderService {


  async addPurchaseOrder(data:any): Promise<[]> {
    try {
     const order=await prisma.purchaseOrder.create({
        data:{
          vendor_id:"e41679c5-cdf4-420e-92c2-1b2685551092"
        }
      })

      if(!order)throw new Error('Failed to create purchased order');
      const refactoredData=data?.map((item)=>{
        return{
          ...item,
          purchase_order_id:order.id,
          item_id:item.item_id.toString()
        }
      }
      )
      return prisma.purchasedItem.createMany({
        data:refactoredData
      })
    } catch (error) {
      console.error('Error creating purchased order:', error);
      throw new Error('Failed to create purchased order');
    }
  }

  async getPurchasedOrders(): Promise<PurchaseOrder[]> {
    try {
      return await prisma.PurchaseOrder.findMany({
        include: {
          vendor: {
            select: {
              name: true
            }
          }
        }
      });
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