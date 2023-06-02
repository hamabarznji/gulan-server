import UserService from '../services/UserService';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getUsers();
      const foundedUsers = users.map((user) => {
        return { id: user.id, name: user.name, email: user.email, role: user.role, themeColor: user.themeColor }
      })
      res.json(foundedUsers);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUser(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ id: user.id, name: user.name, email: user.email, role: user.role, themeColor: user.themeColor }
      );
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  async createUser(req: Request, res: Response) {
    try {

      const user = await UserService.createUser({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10)
      });
      if (!user) {
        return res.status(400).json({ error: 'User already exists' });

      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      const { id,password } = req.body
      if(password){
        console.log(password)
        const pass=bcrypt.hashSync(req.body.password , 10)
        const user = await UserService.updateUser(id,{
          ...req.body
          ,password:pass
  
        });
        return res.json(user);
      }
      const user = await UserService.updateUser(id,req.body);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }



  }




  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await UserService.login(email);
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!user || !isPasswordCorrect) {
        return res.status(401).json({ error: 'Invalid Credentials' });
      }

      const token = jwt.sign({ id: user.id, role: user.role, themeColor: user.themeColor }, 'mbsT');
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Expires in 1 hour

      return res.json({ id: user.id, token, role: user.role });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }


}

export default new UserController();
