import { Router, Request, Response } from "express";
import routes from "../../routes.json";
import UserController from "../controllers/UserController";
import verifyAuth from "../../middleware/verifyAuth";
import passport from "../../middleware/AuthMiddleware";
const router = Router();

router.post(routes.user.login, UserController.login);

router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.user.getUsers, UserController.getUsers);

router.post(routes.user.createUser, UserController.createUser);
router.patch(routes.user.updateUser, UserController.updateUser);
router.get(routes.user.getUser, UserController.getUser);
router.get(routes.user.getUser, UserController.getUsers);

export default router;
 