export interface IAuthService {
  verify: (username: string, password: string) => Promise<boolean>;
  getAccessToken: (user: any) => string;
  getRefreshToken: (user: any) => string;
}
