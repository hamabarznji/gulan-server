const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import seedExpenses from "../seedData/expenses";
import users from "../seedData/users";
import seedExpenseCategories from "../seedData/expenseCategories";
import itemCategories from "../seedData/itemCategories";
import seedItemCategories from "../seedData/vendors";
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



  // async seedItemCategories() {
  //   try {
  //     const existingItemCategory = await prisma.itemCategory.findMany();
  //     if (existingItemCategory.length === 0) {
  //       await prisma.itemCategory.createMany({
  //         data: itemCategories,
  //       });
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async seedData() {
    try {
      await prisma.$transaction(async () => {
        await this.seedUser();
        await seedExpenseCategories(prisma);
        await seedExpenses(prisma);
        await seedItemCategories(prisma)
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
