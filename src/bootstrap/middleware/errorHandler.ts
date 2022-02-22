import { Request, Response, NextFunction } from 'express';

const logMessage = (errorMessage: string, err: any, req: Request) => {
  const {
    ip, hostname, originalUrl,
  } = req;
  const requestData: any = {
    stack: err.stack, status: err.status, ip, url: hostname + originalUrl,
  };

  //   if (token) {
  //     requestData.userUid = token.uid;
  //   }

  requestData.data = {};

  if (req.body) {
    requestData.data.body = req.body;
  }

  if (req.query) {
    requestData.data.query = req.query;
  }

  console.log(`requestData ${errorMessage} ${err.stack}`, requestData);
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || (err.errors && err.errors[0].message) || 'Internal Server Error';
  if (status === 500) {
    logMessage(message, err, req);
  }
  return res.status(status).send({ message, status: 'error' });
};

process.on('unhandledRejection', (err: Error) => {
  console.error(`unhandledRejection: ${err.message} ${err.stack}`);
  process.exit();
});

process.on('uncaughtException', (err: Error) => {
  console.error(`unhandledRejection: ${err.message} ${err.stack}`);
  process.exit();
});

export default errorHandler;
