import { Request, Response } from 'express';
import ItemService from '../services/ItemService';
class ItemController {
  async getItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getItems();
      const arrangedItems = items.map((item) => {
        return {
          id: item.id,
          itemId: item["item_id"],
          qty: item["qty"],
          purchaseOrderId: item["purchase_order_id"],
          price: item["price"],
          category_id: item["item"].category_id,
          itemName: item["item"].name,
          itemCode: item["item"].code,
          itemColorId: item["item"].color_id,
          itemSizeId: item["item"].size_id,
          itemColor: item["item"]['color'].color,
          itemSize: item["item"]['size'].size,
          categoryName: item["item"]['category'].name

        }
      })


      // Create a map to store the items with the same itemId grouped into arrays

      const itemMap = new Map<string, any>();
      arrangedItems.forEach((item) => {
        const { itemId, qty, price } = item;

        if (itemMap.has(itemId)) {
          const existingItem = itemMap.get(itemId);
          existingItem.qty += qty;
          existingItem.price += price;
          existingItem.count++;
        } else {
          itemMap.set(itemId, { ...item, count: 1 });
        }
      });

      // Convert the itemMap values (arrays of items with the same itemId) into an array of arrays
      const groupedArray = Array.from(itemMap.values())
     const finalItems=groupedArray.map((item) => {
        return {
          ...item,
          price: item.price / item.count
        };
      });
      
    


      res.json(finalItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }





}

export default new ItemController();
