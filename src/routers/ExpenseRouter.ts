import { Router } from "express";
import routes from "../../routes.json";
import ExpenseController from "../controllers/ExpenseController";
import verifyAuth from "../../middleware/verifyAuth";
import passport from "../../middleware/AuthMiddleware";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.expense.getExpenses, ExpenseController.getExpenses);
router.patch(routes.expense.updateExpense, ExpenseController.updateExpense);
router.post(routes.expense.createExpense, ExpenseController.createExpense);
//router.get(routes.expense.getExpense, ExpenseController.getExpense);

export default router;
