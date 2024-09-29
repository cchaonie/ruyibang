import { Router, Request, Response } from 'express';

import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES } from '../constants/types.js';
import { IAuthService } from '../services/AuthService.interface.js';
import { IAuthController } from './AuthController.interface.js';

@injectable()
export default class AuthController implements IAuthController {
  public router = Router();
  authService: IAuthService;

  constructor(@inject(TYPES.authService) authService: IAuthService) {
    this.authService = authService;
    this.router.post('/', this.verify);
  }

  async verify(req: Request, res: Response) {
    try {
      await this.authService.verify(req.body.username, req.body.password);
      res.send('Hello World');
    } catch (error) {
      res.status(401).send('Unauthorized');
    }
  }
}
