import express, { Application } from 'express';
import errorHandler from '@app/bootstrap/middleware/errorHandler';
import { applyMiddlewares } from '@app/bootstrap/middleware';

const app: Application = express();

const App = async (): Promise<Application> => {
  // db connection, server creation, swagger, application level middlewares, or any jobs
  try {
    await applyMiddlewares(app);
    app.use(errorHandler);
    return app;
  } catch (error:any) {
    throw new Error(error);
  }
};

export default App;
