
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export interface UserModel{
    id: number;
    name: string;
    email2: string;

}
export const User=prisma.user;


