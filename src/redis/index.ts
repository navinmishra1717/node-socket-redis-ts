import * as redis from 'redis';
import { REDIS_PORT, REDIS_HOST } from '@app/config';
import { RedisClientType } from '@node-redis/client';

const options = {
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
};

class RedisManager {
  private client: RedisClientType | undefined;

  public async init() {
    this.client = redis.createClient(options);
    await this.client.connect();
    this.client.on('connect', () => {
      console.log('Redis client connected');
    });

    this.client.on('error', (err: any) => {
      console.log(`Something went wrong ${err}`);
    });
  }

  public async get(key: string) {
    if (!this.client) {
      throw new Error('Redis client not initialized');
    }
    const result = await this.client?.get(key);
    if (result) {
      return JSON.parse(result);
    }
    return null;
  }

  public async set(key: string, value: any) {
    if (!this.client) {
      throw new Error('Redis client not initialized');
    }
    const result = await this.client?.set(key, JSON.stringify(value));
    return result;
  }
}

export default new RedisManager();
