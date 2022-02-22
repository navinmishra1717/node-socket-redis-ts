import { Request, Response, NextFunction } from 'express';

export const logister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
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
    return res.json({
      username,
      password,
    });
  } catch (error: any) {
    return next(error);
  }
};
