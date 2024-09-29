import Router from 'express';

import { Routes } from './constants/routes.js';
import UserController from './controllers/UserController.js';
import AuthController from './controllers/AuthController.js';

export default function router() {
  const router = Router();

  router.use(Routes.USER, new UserController().router);
  router.use(Routes.AUTH, new AuthController().router);

  return router;
}
