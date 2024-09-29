import { Router, Request, Response } from 'express';

export default class AuthController {
  public router = Router();

  constructor() {
    this.router.post('/', this.auth);
  }

  auth(req: Request, res: Response) {
    res.send('Hello World');
  }
}
