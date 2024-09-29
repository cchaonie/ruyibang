import { Router, Request, Response } from 'express';

export default class UserController {
  public router = Router();

  constructor() {
    this.router.get('/', this.getUser);
  }

  getUser(req: Request, res: Response) {
    res.send('Hello World');
  }
}
