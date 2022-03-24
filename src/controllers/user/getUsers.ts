import { Request, Response, NextFunction } from 'express';
import { users } from '@app/constants';

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await users.filter((user) => user.id !== '1');
    return res.json(data);
  } catch (e: any) {
    return next(e);
  }
}
