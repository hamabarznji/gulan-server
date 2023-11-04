import { Router } from "express";
const routes = require('../../routes.json');
import PurchasedItemsController from "../controllers/PurchasedOrderController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.orders.purchasedOrders.getPurchasedOrders, PurchasedItemsController.getPurchasedOrders);
router.get(routes.orders.purchasedOrders.getItemsByPurchasedOrder, PurchasedItemsController.getItemsByPurchasedOrder);
router.post(routes.orders.purchasedOrders.addPurchaseOrder, PurchasedItemsController.addPurchaseOrder);
router.patch(routes.orders.purchasedOrders.updatePurchasedItem, PurchasedItemsController.updatePurchasedItem);


export default router;
 