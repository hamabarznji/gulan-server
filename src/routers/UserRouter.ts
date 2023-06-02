import { Router, Request, Response } from "express";
import routes from "../../routes.json";
import UserController from "../controllers/UserController";
import verifyAuth from "../../middleware/verifyAuth";

const router = Router();

router.post(routes.user.login, UserController.login);

router.get(routes.user.getUsers, verifyAuth, UserController.getUsers);

export default router;
 