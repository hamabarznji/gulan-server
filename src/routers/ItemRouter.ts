import { Router } from "express";
const routes = require('../../routes.json');
import ItemController from "../controllers/ItemController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.items.getItems, ItemController.getItems);
router.get(routes.items.getItemsForPruchaseInvoice, ItemController.getItemsForPruchaseInvoice);
router.get(routes.items.getItemById, ItemController.getItemById);
router.get(routes.items.getItemInfo, ItemController.getItemCatColorSize);
router.get(routes.items.getItemByIdForPurchaseInvoice, ItemController.getItemByIdForPurchaseInvoice);
router.post(routes.items.addItem, ItemController.addItem);
router.patch(routes.items.updateItem, ItemController.updateItem);


export default router;
