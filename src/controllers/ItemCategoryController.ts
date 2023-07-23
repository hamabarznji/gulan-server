import { Request, Response } from 'express';
import ItemCategoryService from '../services/ItemCategoryService';
class ItemCategoryController {
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await ItemCategoryService.getCategories()
      return res.status(200).json(categories);



  }catch (error) {
    res.status(500).json({ error: 'Internal Server Error' + error.message });
  }




  }
}

export default new ItemCategoryController();
