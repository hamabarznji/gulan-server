import * as dotenv from 'dotenv';
dotenv.config(); 

import https from 'https';
import fs from 'fs';
import cors from 'cors';
import express from 'express';
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

const serverOptions = {
  key: fs.readFileSync(process.env.PRIVATE_KEY_PATH.toString()),
  cert: fs.readFileSync(process.env.CERTIFICATE_PATH.toString()),
  passphrase:process.env.PASS_CREDENTIALS
};
const server = https.createServer(serverOptions, app);


server.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${3001}`)
);
 