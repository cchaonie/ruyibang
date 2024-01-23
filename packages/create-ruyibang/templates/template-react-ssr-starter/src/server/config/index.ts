import path from 'path';
import { config } from 'dotenv';

const cwd = process.cwd();
const NODE_ENV = process.env.NODE_ENV;

export const loadEnv = () =>
  config({
    path: path.resolve(path.resolve(cwd, `.env.${NODE_ENV}`)),
  }).parsed;
