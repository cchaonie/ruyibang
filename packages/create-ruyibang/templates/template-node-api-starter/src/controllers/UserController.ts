import { Router, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IUserService } from '../services/UserService.interface.js';
import { TYPES } from '../constants/types.js';
import { IUserController } from './UserController.interface.js';

@injectable()
export default class UserController implements IUserController {
  public router = Router();
  userService: IUserService;

  constructor(@inject(TYPES.userService) userService: IUserService) {
    this.router.get('/', this.getUser);
    this.userService = userService;
  }

  async getUser(req: Request, res: Response) {
    res.send('Hello World');
  }

  async createUser(req: Request, res: Response) {
    try {
      await this.userService.createUser(req.body.username, req.body.password);
      res.send('User created');
    } catch (error) {
      res.status(400).send('Error');
    }
  }
}
