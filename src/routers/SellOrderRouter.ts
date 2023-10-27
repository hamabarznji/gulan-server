import { Router } from "express";
import routes from "../../routes.json";
import SellOrderController from "../controllers/SellOrderController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.orders.sellOrders.getSellOrders, SellOrderController.getSellOrders);
router.post(routes.orders.sellOrders.createSellOrder, SellOrderController.createOrder);



export default router;
