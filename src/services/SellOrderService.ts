import prisma from "../../PrismaInstance";
import { Prisma, Order,OrderedItem } from "@prisma/client";
class SellOrderService {


  async getSellOrders(): Promise<Order[]> {
    try {
      return await prisma.order.findMany();
    } catch (error) {
      console.error('Error retrieving selling orders:', error);
      throw new Error('Failed to retrieve selling orders');
    }
  }
  async createOrder(data: any): Promise<Order> {
    try {
      return await prisma.order.create({
        data
      });
    } catch (error) {
      console.error('Error creating selling order:', error);
      throw new Error('Failed to creating selling order');
    }
  }
  async addOrderedItems(data: any): Promise<OrderedItem> {
    try {
      return await prisma.orderedItem.createMany({
        data: data,
      });
    } catch (error) {
      console.error('Error adding ordred items:', error);
      throw new Error(`Failed to adding ordred items: ${error}`);
    }
  }
  async deleteOrder(id: string): Promise<Order> {
    try {
      return await prisma.order.delete({
        where:{
          id
        }
      });
    } catch (error) {
      console.error('Error deleteing order order:', error);
      throw new Error(`Failed to deleteing order: ${error}`);
    }
  }

}

export default new SellOrderService();