import prisma from './PrismaInstance';
import { User } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

const users: User[] = [
  // @ts-ignore

  { id: uuidv4(), name: 'Gullan', email: 'gullan@example.com', password:bcrypt.hashSync('password1', 10) , role: 'ADMIN', themeColor: true },
// @ts-ignore

  { id: uuidv4(), name: 'User', email: 'user@example.com', password: bcrypt.hashSync('password1', 10), role: 'USER', themeColor: true },
];

async function seed() {
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

seed()
  .catch((error) => console.error(error))
  .finally(() => prisma.$disconnect());
 