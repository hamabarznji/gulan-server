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
    const { id } = req.params;
    try {
      const purchasedItems = await PurchasedItemsService.getItemsByPurchasedOrder(id);
      console.log(purchasedItems);
      const items = purchasedItems.map((item) => {
        return {
          category_id: item['item'].category_id,
          category: item['item'].category.name,
          color_id: item['item'].color_id,
          color: item['item'].color.color,
          size_id: item['item'].size_id,
          size: item['item'].size.size,
          name: item['item'].name,
          selling_price: item['item'].selling_price,
          item_id: item['item'].id,
          id: item.id,
          purchase_order_id: item.purchase_order_id,
          qty: item.qty,
          price: item.price,


        }
      })
      // if (!purchasedItems) {
      //     return res.status(404).json({ error: 'Purchased items not found' });
      // }

      // const { item, ...rest } = purchasedItems;
      // const updatedObject = { ...rest, ...item };

      return res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }



}

export default new PurchasedOrderContoller();
