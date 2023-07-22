import prisma from "../../PrismaInstance";
import { Prisma, Item } from "@prisma/client";
class ItemService {


    async getItems(): Promise<Item[]> {
        try {
            return await prisma.purchasedItem.findMany({
              
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
                ;
        } catch (error) {
            console.error('Error retrieving expenses:', error);
            throw new Error('Failed to retrieve expenses');
        }
    }





}

export default new ItemService();