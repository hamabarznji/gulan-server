const UserModel = require("../models/user");

class UserService {
  async getUsers() {
    try {
      return await UserModel.findAll();
    } catch (error) {
      console.error("Error retrieving users:", error);
      return error;
    }
  }

  async login(user) {
    try {
      const { email } = user;
      const foundedUser = await UserModel.findOne({ where: { email } });
      return foundedUser;
    } catch (error) {
      console.error("Error occurred during login:", error);
      return error;
    }
  }
}

module.exports = new UserService();
