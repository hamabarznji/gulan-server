import { Router } from "express";
import routes from "../../routes.json";
import ItemCategoryController from "../controllers/ItemCategoryController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.itemCategories.getItemCategories, ItemCategoryController.getCategories);
router.post(routes.itemCategories.addItemCategory, ItemCategoryController.addItemCategory);
router.patch(routes.itemCategories.updateItemCategory, ItemCategoryController.updateItemCategory);


export default router;
