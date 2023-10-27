import { Request, Response } from 'express';
import ItemService from '../services/ItemService';
import PurchasedOrderService from '../services/PurchasedOrderService';
class ItemController {
  async getItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getItems();
      const arrangedItems = items?.purchasedItems.map((item) => {
        return {
          id: item.id,
          itemId: item["item_id"],
          qty: item["qty"],
          purchaseOrderId: item["purchase_order_id"],
          price: item["price"],
          selling_price: item["item"].selling_price,
          category_id: item["item"].category_id,
          name: item["item"].name,
          itemCode: item["item"].code,
          color_id: item["item"].color_id,
          size_id: item["item"].size_id,
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
      const finalItems = groupedArray.map((item) => {
        return {
          ...item,
          price: item.price / item.count
        };
      });


      const filteredItems = items?.items.filter(item => {
        return !finalItems.some(finalItem => finalItem.itemId === item.id);
      });


      const fixedItems = filteredItems.flatMap((item) => {
        return {
          ...item,
          qty: 0,
          itemSize: item['size'].size,
          itemColor: item['color'].color,
          categoryName: item['category'].name,
          purchasedPrice: 0,
          count: 0,
          sellingPrice: item.selling_price,
          price: 0,

        }
      })
      console.log(fixedItems);

      res.json(finalItems.concat(fixedItems));
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }



  async getItemCatColorSize(req: Request, res: Response) {
    try {
      const itemInfo = await ItemService.getItemCatColorSize();
      res.json(itemInfo);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error: ' + error.message });
    }
  }

  async getItemById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const item = await ItemService.getItemById(id);
      console.log();
      if (item.length == 0) {
        return res.status(404).json({ error: 'Item not found' });
      }

      const arrangedItems = item.map((item) => {
        return {
          id: item.id,
          itemId: item["item_id"],
          qty: item["qty"],
          purchaseOrderId: item["purchase_order_id"],
          price: item["price"],
          sellingPrice: item["item"].selling_price,
          category_id: item["item"].category_id,
          itemName: item["item"].name,
          itemCode: item["item"].code,
          itemColorId: item["item"].color_id,
          itemSizeId: item["item"].size_id,
          itemColor: item["item"]['color'].color,
          itemSize: item["item"]['size'].size,
          categoryName: item["item"]['category'].name,
          invoiceQty: 1

        }
      })



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
      const finalItems = groupedArray.map((item) => {
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
  async getItemsForPruchaseInvoice(req: Request, res: Response) {
    try {
      const items = await ItemService.getItemsForPruchaseInvoice();
    
const refacotredItems=items.map((item)=>{
  return {
    id:item.id,
    value:item.id,
    name:item.name,
    label:item.name
  }
})

      res.json(refacotredItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }



  async addItem(req: Request, res: Response) {
    try {

      const item = await ItemService.addItem(req.body);


      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  async updateItem(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
    
    const item = await ItemService.updateItem(id, req.body);

      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getItemByIdForPurchaseInvoice(req: Request, res: Response) {
    try {
      const { id } = req.params;
    
    const item = await ItemService.getItemByIdForPurchaseInvoice(id);
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default new ItemController();
