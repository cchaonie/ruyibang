import Router from 'express';

import { Routes } from './constants/routes.js';
import UserController from './controllers/UserController.js';
import AuthController from './controllers/AuthController.js';
import { container } from './container.js';
import { TYPES } from './constants/types.js';

export default function router() {
  const router = Router();

  router.use(
    Routes.USER,
    container.get<UserController>(TYPES.userController).router,
  );
  router.use(
    Routes.AUTH,
    container.get<AuthController>(TYPES.authController).router,
  );

  return router;
}
