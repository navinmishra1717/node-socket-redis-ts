import express, { Application } from 'express';
import swagger from '@app/bootstrap/middleware/swagger';
import { applyMiddlewares } from '@app/bootstrap/middleware';
import errorHandler from '@app/bootstrap/middleware/errorHandler';

const app: Application = express();

const App = async (): Promise<Application> => {
  // db connection, server creation, swagger, application level middlewares, or any jobs
  try {
    await applyMiddlewares(app);
    await swagger(app);
    app.use(errorHandler);
    return app;
  } catch (error:any) {
    throw new Error(error);
  }
};

export default App;
