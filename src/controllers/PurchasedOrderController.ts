import { Request, Response } from 'express';
import PurchasedItemsService from '../services/PurchasedOrderService';
class PurchasedOrderContoller {
  async addPurchaseOrder(req: Request, res: Response) {
    

    try {
      const refactoredData=req?.body?.map((item)=>{
        return{
          item_id:item.item_id.toString(),
          qty:item.qty,
          price:item.price
        }
      })

      const order = await PurchasedItemsService.addPurchaseOrder(refactoredData)
     
      return res.status(200).json(order);



    } catch (error:any) {
      res.status(500).json(error.message );
    }

  }
  async getPurchasedOrders(req: Request, res: Response) {
    try {
      const purchasedItems = await PurchasedItemsService.getPurchasedOrders()
   
      return res.status(200).json(purchasedItems);



    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }

  async getItemsByPurchasedOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const purchasedItems = await PurchasedItemsService.getItemsByPurchasedOrder(id);
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
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }

  async updatePurchasedItem(req: Request, res: Response) {
    const { id } = req.params;
    
    try {
      const updatedItems = await PurchasedItemsService.updatePurchasedItem(id,req.body)
   
      return res.status(200).json(updatedItems);

    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  
  }
}

export default new PurchasedOrderContoller();
