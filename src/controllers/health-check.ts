// import { getAnimalProperty } from '@app/utils';
import { NextFunction, Request, Response } from 'express';

export const healthCheck = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { version } = req.query;
    // const animalProp = getAnimalProperty();
    // console.log({ animalProp });
    return res.json({
      success: true,
      data: {
        version,
      },
      message: 'health check successful',
    });
  } catch (error: any) {
    return next(error);
  }
};
