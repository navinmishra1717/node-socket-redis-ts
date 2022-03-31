export enum ENV {
  DEV = 'dev',
  PROD = 'prod',
  TEST = 'test',
}

export const JWT_SECRET = process.env.JWT_SECRET || 'secret';
export const JWT_VERSION = process.env.JWT_VERSION || '1.0';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7h';
export const APP_PORT: string = process.env.APP_PORT || '3005';
export const APP_ENV = (process.env.NODE_ENV || process.env.APP_ENV) as ENV;
export const REDIS_PORT = process.env.REDIS_PORT || '6379';
export const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
