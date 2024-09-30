export interface IUserService {
  createUser: (
    username: string,
    password: string,
    email: string,
  ) => Promise<void>;

  getUserByUsername: (username: string) => Promise<any>;
}
