const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();
const pass = bcrypt.hashSync('11111111', 10);
const users = [
  {
    username: 'gulan',
    password: pass,
    role: 'admin',
    themeColor: true,
  },
];

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

  async seedData() {
    try {
      await prisma.$transaction(async (prisma) => {
        await this.seedUser();
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
