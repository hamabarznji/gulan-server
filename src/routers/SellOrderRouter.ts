import { Router } from "express";
import routes from "../../routes.json";
import SellOrderController from "../controllers/SellOrderController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.orders.sellOrders.getSellOrders, SellOrderController.getSellOrders);
router.get(routes.orders.sellOrders.getItemsBySellOrder, SellOrderController.getSellOrdersByOrderID);
router.post(routes.orders.sellOrders.createSellOrder, SellOrderController.createOrder);
router.patch(routes.orders.sellOrders.updateSellItem, SellOrderController.updateSellOrderItem);



export default router;
