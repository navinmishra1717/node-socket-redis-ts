import { Queue } from 'bullmq';
import handlers from './handlers';
import { HandlerJobData } from './handlerTypes';

export enum HandlerType {
  NewUser = 'NewUser',
}

class QueueManager {
  protected queues: Partial<Record<HandlerType, Queue>> = {};

  list() {
    return Object.values(this.queues);
  }

  initHandlers() {
    handlers.forEach((handler) => {
      this.queues[handler.name] = handler.queue;
    });
  }

  createJob<T extends HandlerType>(name: T, data: HandlerJobData[T], type?: string, options: object = {}) {
    if (!this.queues[name]) {
      throw new Error(`Queue ${name} not found`);
    }
    return this.queues[name]!.add(type || name, data, options);
  }
}

export default new QueueManager();
