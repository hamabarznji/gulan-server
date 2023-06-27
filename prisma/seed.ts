const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import expenses from "../seedData/expenses";
import users from "../seedData/users";
import expenseCategories from "../seedData/expenseCategories";

class Seeder {
  async seedUser() {
    try {
      const user = await prisma.user.findMany();
      if (user.length === 0) {
        await prisma.user.createMany({
          data: users,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async seedExpenseCategories() {
    try {
      const categories = await prisma.expenseCategory.findMany();
      if (categories.length === 0) {
        await prisma.expenseCategory.createMany({
          data: expenseCategories,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async seedExpenses() {
    try {
      const existingExpenses = await prisma.expense.findMany();
      if (existingExpenses.length === 0) {
        await prisma.expense.createMany({
          data: expenses,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async seedData() {
    try {
      await prisma.$transaction(async (prisma) => {
        await this.seedUser();
        await this.seedExpenseCategories();
        await this.seedExpenses();
      });
    } catch (error) {
      throw error;
    }
  }

  async run() {
    try {
      await this.seedData();
    } catch (error) {
      throw error;
    }
  }
}

const seeder = new Seeder();
seeder
  .run()
  .then(() => {
    console.log('Seeding completed successfully.');
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    prisma.$disconnect();
  });
