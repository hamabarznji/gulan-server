import { Router } from "express";
const routes = require('../../routes.json');
import SizeController from "../controllers/SizeController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.sizes.getSizes, SizeController.getSizes);
router.post(routes.sizes.addSize, SizeController.addSize);
router.patch(routes.sizes.updateSize, SizeController.updateSize);



export default router;
