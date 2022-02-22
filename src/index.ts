import 'dotenv/config';
import App from '@app/app';

(async () => {
  const app = await App();
  app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
    if (process.send) {
      process.send('ready', () => console.log('Hello buddy'));
    }
  });
})();
