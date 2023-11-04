import { Router } from "express";
const routes = require('../../routes.json');
import ExpenseController from "../controllers/ExpenseController";
import passport from "../../middleware/AuthMiddleware";
import requireRoles from "../../middleware/requireRoles";
const router = Router();


router.use(passport.authenticate("jwt", { session: false }));
router.get(routes.expense.getExpenses,  requireRoles(["admin",]), ExpenseController.getExpenses);
router.get(routes.expense.getTopExpense, ExpenseController.getTopExpenses);
router.get(routes.expense.getExpenseSummaryReport, ExpenseController.getExpenseSummaryReport);
router.patch(routes.expense.updateExpense, ExpenseController.updateExpense);
router.post(routes.expense.createExpense, ExpenseController.createExpense);

export default router;
