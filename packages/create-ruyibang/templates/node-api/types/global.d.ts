declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      DB_CONNECTION_STRING: string;
    }
  }
}

export {};
