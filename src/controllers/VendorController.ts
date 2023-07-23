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

  async addVendor(req: Request, res: Response) {
    try {

      const vendor = await VendorService.addVendor({
        ...req.body,
      });
      res.json(vendor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


  async  updateVendor(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
  
      const vendor = await VendorService.updateVendor(id, req.body);
  
      if (!vendor) {
        return res.status(404).json({ error: 'Vendor not found' });
      }
  
      return res.json(vendor);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new VendorContoller();
