import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import Queue from '@app/queue';

const QueueUI = () => {
  const serverAdapter = new ExpressAdapter();
  createBullBoard({
    queues: Queue.list().map((q) => new BullMQAdapter(q)),
    serverAdapter,
  });
  serverAdapter.setBasePath('/queue');
  return serverAdapter.getRouter();
};

export default QueueUI;
