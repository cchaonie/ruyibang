import Router from 'express';

import { Routes } from './types.ts/routes.js';
import UserController from './controllers/UserController.js';

export default function router() {
  const router = Router();

  router.use(Routes.USER, new UserController().router);

  return router;
}
