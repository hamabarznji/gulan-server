import Prisma from "../../PrismaInstance";

class UserService {
  async getUsers() {
    try {
      return await Prisma.user.findMany();
    } catch (error) {
      console.error("Error retrieving users:", error);
      return error;
    }
  }

  async login(user) {
    try {
      const { email } = user;
      const foundedUser = await Prisma.user.findUnique({
        where: {
          email,
        },
      });
      
      return foundedUser;
    } catch (error) {
      console.error("Error occurred during login:", error);
      return error;
    }
  }
}

export default new UserService();
