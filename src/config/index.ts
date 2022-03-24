export enum ENV {
  DEV = 'dev',
  PROD = 'prod',
  TEST = 'test',
}

export const APP_PORT: string = process.env.APP_PORT || '3005';
export const APP_ENV = (process.env.NODE_ENV || process.env.APP_ENV) as ENV;
export const REDIS_PORT = process.env.REDIS_PORT || '6379';
export const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
