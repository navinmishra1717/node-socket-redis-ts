import { Request, Response, NextFunction } from 'express';
import { nanoid } from 'nanoid';
import Hash from '@app/utils/hash';
import JWT from '@app/libs/jwt';
import Redis from '@app/libs/redis';

export const logister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await Redis.get(username);
    const uniqueId = nanoid(6);
    if (user) {
      // login
      const { password: pw, ...rest } = user;
      if (!password || !Hash.compare(password, pw)) {
        return res.status(401).send({
          message: 'Password doesnot match',
        });
      }
      return res.status(200).send({
        message: 'Login Success',
        data: {
          token: JWT.generate(nanoid(6), username),
          user: {
            ...rest,
            updatedAt: new Date(),
          },
        },
      });
    }
    // else register
    await Redis.set(username, {
      uid: uniqueId,
      username,
      password: await Hash.create(password),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return res.json({
      message: 'Register Success',
      data: {
        token: JWT.generate(uniqueId, username),
        user: {
          uid: uniqueId,
          username,
        },
      },
    });
  } catch (error: any) {
    return next(error);
  }
};
