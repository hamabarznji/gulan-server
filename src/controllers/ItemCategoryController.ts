import { Request, Response } from 'express';
import ItemCategoryService from '../services/ItemCategoryService';
class ItemCategoryController {
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await ItemCategoryService.getCategories()
      return res.status(200).json(categories);



    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }


  async addItemCategory(req: Request, res: Response) {
    try {

      const category = await ItemCategoryService.addItemCategory({
        ...req.body,
      });
      res.json(category);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }



  async updateItemCategory(req: Request, res: Response) {

    try {
      console.log(req.body);
      const { id } = req.params;
      const cateogry = await ItemCategoryService.updateItemCategory(id, req.body);

      if (!cateogry) {
        return res.status(404).json({ error: 'Cateogry not found' });
      }

      return res.json(cateogry);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ItemCategoryController();
