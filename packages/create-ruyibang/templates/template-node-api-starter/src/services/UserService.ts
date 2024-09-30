import { injectable } from 'inversify';
import bcrypt from 'bcrypt';
import 'reflect-metadata';
import { IUserService } from './UserService.interface.js';
import pool from '../db/index.js';
import { QueryResult } from 'mysql2/promise';

@injectable()
export default class UserService implements IUserService {
  async createUser(
    username: string,
    password: string,
    email: string,
  ): Promise<void> {
    const query =
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';

    const passwordHash = await bcrypt.hash(password, 10);

    await pool.execute(query, [username, passwordHash, email]);
    return Promise.resolve();
  }

  async getUserByUsername(username: string): Promise<any> {
    const query = 'SELECT * FROM users WHERE username = ?';

    const [rows] = await pool.execute(query, [username]);

    return rows;
  }
}
