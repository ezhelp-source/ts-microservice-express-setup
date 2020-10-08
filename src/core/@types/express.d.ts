declare namespace Express {
  export interface Request {
    user: {
      id: string,
      tenant: string,
      name: string,
      email: string,
      level: string,
      app_groups: string,
      app_rules: string,
      user_rules: string,
    }
  }
}
