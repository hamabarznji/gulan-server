import UserService from '../services/UserService';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      res.json(users);
    } catch (error) {
      console.error('Error retrieving users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await UserService.login({ email, password });
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }

      const token = jwt.sign({ id: user.id, role: user.role }, 'mbsT');
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

      return res.json({ id: user.id, token, role: user.role });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


}

export default new UserController();
