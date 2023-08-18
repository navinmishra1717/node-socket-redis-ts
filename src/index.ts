import 'dotenv/config';
import App from '@app/app';
// import cluster from 'cluster';
// import * as OS from 'os';

(async () => {
  // if (cluster.isPrimary) {
  //   const numWorkers = OS.cpus().length;
  //   console.log(`numWorkers: ${numWorkers}`);
  //   for (let i = 0; i < numWorkers; i += 1) {
  //     // for optimum performance
  //     cluster.fork();
  //   }
  //   cluster.on('online', (worker) => {
  //     console.log(`worker: ${worker.process.pid} is online`);
  //   });
  //   cluster.on('exit', (worker, code, signal) => {
  //     console.log(
  //       `worker: ${worker.process.pid} exited with code ${code} and signal ${signal}`,
  //     );
  //     console.log('Starting a new worker');
  //     cluster.fork();
  //   });
  // } else {
  const app = await App();
  app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
    if (process.send) {
      process.send('ready', () => console.log('Hello buddy'));
    }
  });
  // }
})();
