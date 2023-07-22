const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import seedExpenses from "../seedData/expenses";
import seedUser from "../seedData/users";
import seedExpenseCategories from "../seedData/expenseCategories";
import seedItemCategories from "../seedData/itemCategories";
import seedVendors from "../seedData/vendors";
import seedSizes from "../seedData/sizes";
import seedColors from "../seedData/colors";
class Seeder {

  async seedData() {
    try {
      await prisma.$transaction(async () => {
        await seedUser(prisma);
        await seedExpenseCategories(prisma);
        await seedExpenses(prisma);
        await seedItemCategories(prisma)
        await seedVendors(prisma)
        await seedSizes(prisma)
        await seedColors(prisma)
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
