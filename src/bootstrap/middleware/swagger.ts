import { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

export const YAML_FILE:string = './src/bootstrap/swagger.yml';

const swagger = async (app: Application) => {
  const swaggerDocument = YAML.load(YAML_FILE);
  if (process.env.APP_ENV === 'development') {
    app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );
  }
};

export default swagger;
