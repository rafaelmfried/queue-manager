import { Provider } from '@nestjs/common';
import Redis from 'ioredis';

export type RedisClient = Redis;

export const redisProvider: Provider = {
  provide: 'REDIS_CONNECTION',
  useFactory: (): RedisClient => {
    const client = new Redis({
      host: process.env.REDIS_HOST || 'redis',
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
      password: process.env.REDIS_PASSWORD || undefined,
    });

    client.on('connect', () => console.log('Redis connected'));
    client.on('error', (error) =>
      console.error('Redis connection error:', error),
    );

    return client;
  },
};
