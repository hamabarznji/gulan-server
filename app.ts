require('dotenv').config();


import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import UserRouter from './src/routers/UserRouter';
import ExpenseRouter from './src/routers/ExpenseRouter';
import ExpenseCategoriesRouter from './src/routers/ExpenseCategoriesRouter';
import ItemRouter from './src/routers/ItemRouter';
import ItemCategoryRouter from './src/routers/ItemCategoryRouter';
import VendorRouter from './src/routers/VendorRouter';
import PurchasedOrdersRouter from './src/routers/PurchasedOrdersRouter';
import ColorssRouter from './src/routers/ColorRouter';
import SizeRouter from './src/routers/SizeRouter';
import SellOrderRouter from './src/routers/SellOrderRouter';
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());


app.use(UserRouter);
app.use(ExpenseRouter);
app.use(ExpenseCategoriesRouter);
app.use(ItemRouter);
app.use(ItemCategoryRouter);
app.use(VendorRouter);
app.use(PurchasedOrdersRouter);
app.use(ColorssRouter);
app.use(SizeRouter);
app.use(SellOrderRouter);


app.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${3001}`)
);
 