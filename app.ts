import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import UserRouter from './src/routers/UserRouter';
const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());


app.use( UserRouter);
app.listen(process.env.PORT || 3001, () =>
  console.log(`Listening on port ${3001}`)
);
 