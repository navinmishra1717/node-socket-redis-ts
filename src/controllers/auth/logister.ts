import { Request, Response, NextFunction } from 'express';
// import Queue from '@app/queue';
// import { HandlerType } from '@app/queue/handlerTypes';
import Redis from '@app/redis';

export const logister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await Redis.get(username);
    if (user) {
      console.log('User found on redis', user);
    } else {
      console.log('User not found on redis');
      await Redis.set(username, req.body);
    }
    // console.log(user, 'user');
    // if (!user) {
    //   console.log('user not found');
    //   set(username, req.body);
    // }
    // const user = await User.findOne({ username });
    // if (!user) {
    //   return res.status(400).json({
    //     message: 'User not found',
    //   });
    // }
    // const isMatch = await user.comparePassword(password);
    // if (!isMatch) {
    //   return res.status(400).json({
    //     message: 'Invalid password',
    //   });
    // }
    // const token = user.generateToken();
    // Queue.createJob<HandlerType.NewUser>(HandlerType.NewUser, { userUid: username });
    return res.json({
      username,
      password,
    });
  } catch (error: any) {
    return next(error);
  }
};
