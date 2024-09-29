import { injectable } from 'inversify';
import 'reflect-metadata';
import { IAuthService } from './AuthService.interface.js';

@injectable()
export default class AuthService implements IAuthService {
  async verify(username: string, password: string): Promise<void> {
    return Promise.resolve();
  }
}
