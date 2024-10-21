import { Container } from 'inversify';
import { TYPES } from './constants/types.js';

import { IAuthService } from './services/AuthService.interface.js';
import AuthService from './services/AuthService.js';
import { IUserService } from './services/UserService.interface.js';
import UserService from './services/UserService.js';
import { IAuthController } from './controllers/AuthController.interface.js';
import AuthController from './controllers/AuthController.js';
import { IUserController } from './controllers/UserController.interface.js';
import UserController from './controllers/UserController.js';

const container = new Container();

container.bind<IAuthService>(TYPES.authService).to(AuthService);
container.bind<IUserService>(TYPES.userService).to(UserService);
container.bind<IAuthController>(TYPES.authController).to(AuthController);
container.bind<IUserController>(TYPES.userController).to(UserController);

export { container };
