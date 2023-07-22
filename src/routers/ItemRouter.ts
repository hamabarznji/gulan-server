import { Router } from "express";
import routes from "../../routes.json";
import ItemController from "../controllers/ItemController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.items.getItems, ItemController.getItems);


export default router;
