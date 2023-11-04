import { Request, Response } from 'express';
import ColorService from '../services/ColorService';
class ColorController {
  async getColors(req: Request, res: Response) {
    try {
      const colors = await ColorService.getColors()
      return res.status(200).json(colors);



    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }

  async addColor(req: Request, res: Response) {
    try {

      const vendor = await ColorService.addColor({
        ...req.body,
      });
      res.json(vendor);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  async  updateColor(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
  
      const color = await ColorService.updateColor(id, req.body);
  
      if (!color) {
        return res.status(404).json({ error: 'Color not found' });
      }
  
      return res.json(color);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ColorController();
