import { Router } from "express";
import routes from "../../routes.json";
import VendorController from "../controllers/VendorController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.vendors.getVendors, VendorController.getVendors);
router.post(routes.vendors.addVendor, VendorController.addVendor);
router.patch(routes.vendors.updateVendor, VendorController.updateVendor);


export default router;
