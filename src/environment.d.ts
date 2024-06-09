declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROJECT_KEY: string;
      CLIENT_ID: string;
      CLIENT_SECRET: string;
      ANON_CLIENT_ID: string;
      ANON_CLIENT_SECRET: string;
      AUTH_URL: string;
      API_URL: string;
    }
  }
}

export {};
