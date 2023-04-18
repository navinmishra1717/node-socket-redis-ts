import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { connector } from 'swagger-routes-express';
import * as OpenApiValidator from 'express-openapi-validator';
import { JWT } from '@app/bootstrap/middleware/jwt';
import controllers from '@app/controllers';

export const YAML_FILE: string = './src/bootstrap/swagger.yml';

const swagger = async (app: Application) => {
  const apiDefinition = YAML.load(YAML_FILE);
  if (process.env.APP_ENV === 'development') {
    app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(apiDefinition, { explorer: true }),
    );
  }
  // validation
  app.use(
    OpenApiValidator.middleware({
      apiSpec: YAML_FILE,
      validateRequests: true,
      // validateResponses: true,
      validateSecurity: true,
    }),
  );

  const connect = connector(controllers, apiDefinition, {
    // options: security, middlewares, etc.
    security: {
      JWT,
    },
    middleware: {
      // myMiddleware: someMiddlewareFunction
    },
  });
  connect(app); // connect all routes
};

export default swagger;
