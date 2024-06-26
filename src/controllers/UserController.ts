import UserService from '../services/UserService';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      const foundedUsers = users.map((user) => {
        return { id: user.id, name: user.username, role: user.role, themeColor: user.themeColor }
      })
      res.json(foundedUsers);
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUser(id);
      if (user === null) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ id: user.id, name: user.username, role: user.role, themeColor: user.themeColor });
    } catch (error:any) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10)
      });
      if (user === null) {
        return res.status(400).json({ error: 'User already exists' });
      }
      res.json(user);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id, password } = req.body;
      let user;

      if (password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        user = await UserService.updateUser(id, {
          ...req.body,
          password: hashedPassword,
        });
      } else {
        user = await UserService.updateUser(id, req.body);
      }

      if (user === null) {
        return res.status(404).json({ error: 'User not found' });
      }

      return res.json(user);
    } catch (error:any) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }


async login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await UserService.login(username);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    if (!process.env.JWT_SECRET_KEY) {
      return res.status(500).json({ error: 'JWT secret key is not configured' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, themeColor: user.themeColor },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' } // Adjust expiration time as needed
    );

    res.cookie('token', token, { httpOnly: true });
    return res.json({ id: user.id, token, role: user.role });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

}

export default new UserController();
