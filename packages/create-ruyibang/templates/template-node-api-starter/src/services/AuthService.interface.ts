export interface IAuthService {
  verify: (username: string, password: string) => Promise<void>;
}
