import { Request, Response } from 'express';
import PurchasedItemsService from '../services/PurchasedOrderService';
class PurchasedOrderContoller {
  async getPurchasedOrders(req: Request, res: Response) {
    try {
      const purchasedItems = await PurchasedItemsService.getPurchasedOrders()
      const result = purchasedItems.map((item) => {
        return {
          ...item,
          vendor: item['vendor'].name

        }
      })
      return res.status(200).json(result);



    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }
  async getItemsByPurchasedOrder(req: Request, res: Response) {
    const {id}=req.params
    console.log(id);
    try {
      const purchasedItems = await PurchasedItemsService.getItemsByPurchasedOrder(id)
    
      return res.status(200).json(purchasedItems);

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }


}

export default new PurchasedOrderContoller();
