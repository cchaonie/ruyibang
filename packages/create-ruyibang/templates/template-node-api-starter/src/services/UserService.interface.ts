export interface IUserService {
  createUser: (username: string, password: string) => Promise<void>;
}
