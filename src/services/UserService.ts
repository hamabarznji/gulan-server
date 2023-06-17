import prisma from "../../PrismaInstance";
import { Prisma, User } from "@prisma/client";

class UserService {
  async getUsers(): Promise<User[]> {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw error;
    }
  }

  async getUser(id: User["id"]): Promise<User | null> {
    try {
      return await prisma.user.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
      
    }
  }

  async createUser(user: Prisma.UserCreateInput): Promise<User> {
    try {
      return await prisma.user.create({
        data: user,
      });
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async updateUser(
    id: string,
    user: Prisma.UserUpdateInput
  ): Promise<User | null> {
    try {
      return await prisma.user.update({
        where: {
          id,
        },
        data: user,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async login( username: string): Promise<User | null> {
    try {
      const foundedUser = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (foundedUser ) {
        return foundedUser;
      }

      return null;
    } catch (error) {
      console.error("Error occurred during login:", error);
      throw error;
    }
  }
}

export default new UserService();
