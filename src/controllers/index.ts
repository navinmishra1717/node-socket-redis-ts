import * as auth from '@app/controllers/auth';
import { healthCheck } from './health-check';

export default {
  ...auth,
  healthCheck,
};
