import { injectable } from 'inversify';
import 'reflect-metadata';
import { IUserService } from './UserService.interface.js';

@injectable()
export default class UserService implements IUserService {
  async createUser(username: string, password: string): Promise<void> {
    return Promise.resolve();
  }
}
