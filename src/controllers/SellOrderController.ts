import { Request, Response } from 'express';
import SellOrderService from '../services/SellOrderService';
import { or } from 'sequelize';
class SellOrderController {
  async getSellOrders(req: Request, res: Response) {
    try {
      const orders = await SellOrderService.getSellOrders()
      return res.status(200).json(orders);



    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }
  async createOrder(req: Request, res: Response) {
    const { items, orderInfo } = req.body
    try {
      const newOrder = await SellOrderService.createOrder({
        user_id: orderInfo.user_id,
        discount: orderInfo.discount,
      })
      if (!newOrder) throw new Error('Failed to create order');
      const orderedItems = items.map((item: any) => {
        return {
          order_id: newOrder.id,
          item_id: item.item_id,
          qty:parseInt(item.qty),
          price: parseFloat(item.price),

        }
      })
      const newOrderedItems = await SellOrderService.addOrderedItems(orderedItems)
      if (!newOrderedItems){
        await SellOrderService.deleteOrder(newOrder.id)
        throw new Error('Failed to add ordered items');
      }
      return res.status(200).json(newOrder);
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }

}

export default new SellOrderController();
