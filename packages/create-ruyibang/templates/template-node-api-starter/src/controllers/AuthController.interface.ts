import { Request, Response } from 'express';

export interface IAuthController {
  verify: (req: Request, res: Response) => Promise<void>;
}