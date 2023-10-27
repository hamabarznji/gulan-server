import prisma from "../../PrismaInstance";
import { Item, Prisma, purchasedItem } from "@prisma/client";
import ItemCategoryService from "./ItemCategoryService";
import ItemColorService from "./ItemColorService";
import ItemSizeService from "./ItemSizeService";
class ItemService {


    async getItems(): Promise<{ items: Item[], purchasedItems: purchasedItem[] }> {
        try {
            const items = await prisma.item.findMany({
                include: {
                    color: true,
                    size: true,
                    category: true,
                }
            });
            const purchasedItems = await prisma.purchasedItem.findMany({

                include: {
                    item: {
                        include: {
                            color: true,
                            size: true,
                            category: true
                        }
                    }
                }
            })
            return {
                items,
                purchasedItems: purchasedItems
            }
        } catch (error) {
            console.error('Error retrieving items:', error);
            throw new Error('Failed to retrieve items');
        }
    }
    async getItemCatColorSize(): Promise<{ categories: any[], colors: any[], sizes: any[], }> {
        try {
            return {
                categories: await ItemCategoryService.getCategories(),
                colors: await ItemColorService.getColors(),
                sizes: await ItemSizeService.getSizes()

            }
        } catch (error) {
            throw new Error('Failed to retrieve item info');
        }
    }


    async getItemById(id: string): Promise<Item[] | null> {
        try {
            const items = await prisma.purchasedItem.findMany({
                where: {
                    item_id: id
                },
                include: {
                    item: {
                        include: {
                            color: true,
                            size: true,
                            category: true
                        }
                    }
                }
            });

            return items || null; // Return null if no items are found
        } catch (error) {
            console.error('Error retrieving items:', error);
            throw new Error('Failed to retrieve items');
        }
    }
    async getItemByIdForPurchaseInvoice(id: string): Promise<Item[] | null> {
        try {
            const items = await prisma.item.findUnique({
                where: {
                    id: id
                },
                
            });

            return items || null; // Return null if no items are found
        } catch (error) {
            console.error('Error retrieving item:', error);
            throw new Error(`Failed to retrieve item. ${error}`);
        }
    }
    async getItemsForPruchaseInvoice(): Promise<Item[] | null> {
        try {
            const items = await prisma.item.findMany();

            return items || null; // Return null if no items are found
        } catch (error) {
            console.error('Error retrieving items:', error);
            throw new Error('Failed to retrieve items');
        }
    }


    async addItem(item: Item): Promise<Item> {
        try {
            return await prisma.item.create({
                data: item,
            });
        } catch (error) {
            throw error; 
        }
    }

    async updateItem(id: string, item:Item): Promise<Item> {
        try {
            console.log({item,id});
            return await prisma.item.update({
                where: {
                    id,
                },
                data: item,
            });
        } catch (error) {
            console.error("Error updating item:", error);
            throw error;
        }
    }
    async addPurchaseOrderInvoice( item:Item): Promise<purchasedItem> {
        try {
            return await prisma.purchasedItem.add({
               
                data: item,
            });
        } catch (error) {
            console.error("Error updating item:", error);
            throw error;
        }
    }
}

export default new ItemService();