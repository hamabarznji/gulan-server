import { Router } from "express";
const routes = require('../../routes.json');
import ColorController from "../controllers/ColorController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.colors.getColors, ColorController.getColors);
router.post(routes.colors.addColor, ColorController.addColor);
router.patch(routes.colors.updateColor, ColorController.updateColor);



export default router;
