import { Router } from "express";
const routes = require('../../routes.json');
import ExpenseCategoriseController from "../controllers/ExpenseCategoryController";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.expense.getExpenseCategories, ExpenseCategoriseController.getExpenseCategories);


export default router;
