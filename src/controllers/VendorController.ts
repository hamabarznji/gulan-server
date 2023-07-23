import { Request, Response } from 'express';
import VendorService from '../services/VendorService';
class VendorContoller {
  async getVendors(req: Request, res: Response) {
    try {
      const vendors = await VendorService.getVendors()
      return res.status(200).json(vendors);



    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' + error.message });
    }




  }
}

export default new VendorContoller();
