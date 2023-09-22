import { Router } from "express";
import routes from "../../routes.json";
import PurchasedItemsController from "../controllers/PurchasedOrderController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.orders.purchasedOrders.getPurchasedOrders, PurchasedItemsController.getPurchasedOrders);


export default router;
