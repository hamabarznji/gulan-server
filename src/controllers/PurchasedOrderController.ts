import { Request, Response } from 'express';
import PurchasedItemsService from '../services/PurchasedOrderService';
class PurchasedOrderContoller {
  async getPurchasedOrders(req: Request, res: Response) {
    try {
      const purchasedItems = await PurchasedItemsService.getPurchasedOrders()
      return res.status(200).json(purchasedItems);



    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }


}

export default new PurchasedOrderContoller();
