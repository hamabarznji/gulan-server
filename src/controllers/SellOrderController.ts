import { Request, Response } from 'express';
import SellOrderService from '../services/SellOrderService';
class SellOrderController {
  async getSellOrders(req: Request, res: Response) {
    try {
      const orders = await SellOrderService.getSellOrders()
      const refactoredOrders=orders.map((order:any,index:number)=>{


        return{
          ...order,
          index:index+1,
          createdBy: order['user'].username,
          createdAt: order['createdAt'].toLocaleString(),
          updatedAt: order['updatedAt'].toLocaleString(),
        }
      });
      
      return res.status(200).json(refactoredOrders);



    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }
  async getSellOrdersByOrderID(req: Request, res: Response) {
    const {id}=req.params
    try {
      const ordredItems = await SellOrderService.getSellOrdersByOrderID(id)
      const refactoredOrderedItems=ordredItems.map((item:any,index:number)=>{
        return{
          ...item,
          index:index+1,
          itemName:item['item'].name,
          itemCategory:item['item']['category'].name,
          itemColor:item['item']['color'].color,
          itemSize:item['item']['size'].size,


        }
      })
      
      return res.status(200).json(refactoredOrderedItems);
    } catch (error:any) {
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
    } catch (error:any) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }

  async updateSellOrderItem(req: Request, res: Response) {
    const {id}=req.params
    try {
      const updatedOrderItem = await SellOrderService.updateSellOrderItem(id,req.body)
      return res.status(200).json(updatedOrderItem);
    } catch (error:any) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  

  }
}

export default new SellOrderController();
