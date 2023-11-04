import { Request, Response } from 'express';
import ItemService from '../services/ItemService';
import PurchasedOrderService from '../services/PurchasedOrderService';
class ItemController {
  async getItems(req: Request, res: Response) {
    try {
        // Step 1: Fetch items from ItemService
        const items = await ItemService.getItems();
        
        // Destructure purchasedItems and orderedItems from items
        const { purchasedItems, orderedItems } = items;

        // Step 2: Arrange purchasedItems data in desired format
        const arrangedItems = purchasedItems.map((item) => {
            return {
                // Mapping properties for purchased items
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
            };
        });

        // Step 3: Group items by itemId using a Map
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

        // Step 4: Convert Map values to an array of arrays
        const groupedArray = Array.from(itemMap.values());

        // Step 5: Calculate final prices for grouped items
        const finalItems = groupedArray.map((item) => {
            return {
                ...item,
                price: item.price / item.count
            };
        });

        // Step 6: Filter items not in finalItems
        const filteredItems = items?.items.filter(item => {
            return !finalItems.some(finalItem => finalItem.itemId === item.id);
        });

        // Step 7: Prepare fixed items
        const fixedItems = filteredItems.flatMap((item) => {
            return {
                ...item,
                qty: 0,
                itemId: item.id,
                itemSize: item['size'].size,
                itemColor: item['color'].color,
                categoryName: item['category'].name,
                purchasedPrice: 0,
                count: 0,
                sellingPrice: item.selling_price,
                price: 0,
            }
        });

        // Step 8: Combine finalItems and fixedItems
        const allItems = finalItems.concat(fixedItems);

        // Step 9: Calculate sold quantities by item_id
        const sumQtyByItem = {};

        orderedItems.forEach(entry => {
            const item_id = entry.item_id;
            const soldQty = entry.qty;

            if (sumQtyByItem[item_id]) {
                sumQtyByItem[item_id] += soldQty;
            } else {
                sumQtyByItem[item_id] = soldQty;
            }
        });

        // Step 10: Transform result to desired format
        const transformedResult = Object.keys(sumQtyByItem).map(item_id => ({ item_id, soldQty: sumQtyByItem[item_id] }));

        // Step 11: Merge transformed result with items and adjust quantities
        const finalResult = allItems.map(item => {
            const found = transformedResult.find(element => element.item_id === item.itemId);
            return {
                ...item,
                soldQty: found ? found.soldQty : 0
            };
        }).map((item) => {
            return {
                ...item,
                qty: item.qty - item.soldQty
            }
        });

        // Step 12: Respond with final result
        res.json(finalResult);
    } catch (error:any) {
        res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
}




  async getItemCatColorSize(req: Request, res: Response) {
    try {
      const itemInfo = await ItemService.getItemCatColorSize();
      res.json(itemInfo);
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error: ' + error.message });
    }
  }

  async getItemById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const item = await ItemService.getItemById(id);
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
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }
  async getItemsForPruchaseInvoice(req: Request, res: Response) {
    try {
      const items = await ItemService.getItemsForPruchaseInvoice();

      const refacotredItems = items.map((item) => {
        return {
          id: item.id,
          value: item.id,
          name: item.name,
          label: item.name
        }
      })

      res.json(refacotredItems);
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }
  }



  async addItem(req: Request, res: Response) {
    try {

      const item = await ItemService.addItem(req.body);


      res.json(item);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  async updateItem(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const item = await ItemService.updateItem(id, req.body);

      return res.status(200).json(item);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getItemByIdForPurchaseInvoice(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const item = await ItemService.getItemByIdForPurchaseInvoice(id);

      const refacotredItems = {
        ...item,
        invoiceQty: 1,
        itemId: item["id"],
        //qty: item["qty"],
        // purchaseOrderId: item["purchase_order_id"],
        // price: item["price"],
        itemName: item["name"],
        itemColor: item["color"].color,
        itemSize: item["size"].size,
        categoryName: item["category"].name,


      }

      return res.status(200).json(refacotredItems);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default new ItemController();
