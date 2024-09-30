import { injectable } from 'inversify';
import bcrypt from 'bcrypt';

import 'reflect-metadata';
import { IAuthService } from './AuthService.interface.js';
import * as tokens from '../utils/tokens.js';

@injectable()
export default class AuthService implements IAuthService {
  async verify(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  getAccessToken(user: any) {
    return tokens.generateAccessToken(user);
  }

  getRefreshToken(user: any) {
    return tokens.generateRefreshToken(user);
  }
}
