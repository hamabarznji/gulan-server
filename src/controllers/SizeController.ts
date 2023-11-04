import { Request, Response } from 'express';
import SizeService from '../services/SizeService';
class SizeController {
  async getSizes(req: Request, res: Response) {
    try {
      const colors = await SizeService.getSizes()
      return res.status(200).json(colors);



    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }

  }

  async addSize(req: Request, res: Response) {
    try {

      const size = await SizeService.addSize({
        ...req.body,
      });
      res.json(size);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }


  async updateSize(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const color = await SizeService.updateSize(id, req.body);

      if (!color) {
        return res.status(404).json({ error: 'Size not found' });
      }

      return res.json(color);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new SizeController();
