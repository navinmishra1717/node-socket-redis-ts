import { Request, Response, NextFunction } from 'express';

export const JWT = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | string[] = String(req.headers['x-access-token'] || req.headers.authorization || req.headers.token || '');
  if (!token) {
    throw new Error('Token not found');
  }

  token = token.replace('Bearer ', '');

  try {
    // req.token = token;
    return next();
  } catch (error: any) {
    return next(error);
  }
};
