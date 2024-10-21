import { Router, Request, Response } from 'express';

import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES } from '../constants/types.js';
import { IAuthService } from '../services/AuthService.interface.js';
import { IAuthController } from './AuthController.interface.js';
import { IUserService } from '../services/UserService.interface.js';

@injectable()
export default class AuthController implements IAuthController {
  public router = Router();
  authService: IAuthService;
  userService: IUserService;

  constructor(
    @inject(TYPES.authService) authService: IAuthService,
    @inject(TYPES.userService) userService: IUserService,
  ) {
    this.authService = authService;
    this.userService = userService;

    this.router.post('/', this.verify);
    this.router.post('/login', this.login);
  }

  verify = async (req: Request, res: Response) => {
    try {
      await this.authService.verify(req.body.username, req.body.password);
      res.send('Hello World');
    } catch (error) {
      res.status(401).send('Unauthorized');
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const [user] = (await this.userService.getUserByUsername(
        req.body.username,
      )) as unknown as any; // TODO type properly
      if (!user) {
        res.status(401).send('Unauthorized');
        return;
      }
      const valid = await this.authService.verify(
        req.body.password,
        user.password,
      );
      if (!valid) {
        res.status(401).send('Unauthorized');
        return;
      }

      res.send({
        message: 'SUCCESSFUL',
        data: {
          accessToken: this.authService.getAccessToken(user),
          refreshToken: this.authService.getRefreshToken(user),
        },
      });
    } catch (error) {
      res.status(401).send('Unauthorized');
    }
  };
}
