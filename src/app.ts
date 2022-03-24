import express, { Application } from 'express';
import swagger from '@app/bootstrap/middleware/swagger';
import { applyMiddlewares } from '@app/bootstrap/middleware';
import errorHandler from '@app/bootstrap/middleware/errorHandler';
import Queue from '@app/queue';
import queueUi from '@app/queue/ui';
import Redis from '@app/redis';

const app: Application = express();

const App = async (): Promise<Application> => {
  // db connection, server creation, swagger, application level middlewares, or any jobs
  try {
    Redis.init();
    Queue.initHandlers();
    app.use('/queue', queueUi());
    await applyMiddlewares(app);
    await swagger(app);
    app.use(errorHandler);
    return app;
  } catch (error:any) {
    throw new Error(error);
  }
};

export default App;
