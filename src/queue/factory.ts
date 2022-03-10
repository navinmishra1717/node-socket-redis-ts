import { Queue, Worker } from 'bullmq';
import { HandlerType, Handler, HandlerJobData } from './handlerTypes';

const connection = {
  host: 'localhost', // redis host
  port: 6379, // redis port
};

class QueueFactory<T extends HandlerType> {
  declare name: T;

  declare handler: Handler<T>;

  declare queue: Queue;

  constructor(name: T, handler: Handler<T>) {
    this.name = name;
    this.handler = handler;
    this.init();
  }

  init() {
    this.queue = new Queue<HandlerJobData[T]>(this.name, { connection });
    this.initHandlers();
  }

  initHandlers() {
    const worker = new Worker(this.name, this.handler, { connection });

    worker.on('completed', (job) => {
      console.log(`${JSON.stringify(job)} is completed`);
    });
    worker.on('failed', (job, error) => {
      console.log(`${JSON.stringify(job)} is failed with error: ${error}`);
    });
  }
}

export default QueueFactory;
