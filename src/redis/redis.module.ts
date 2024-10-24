import { Module, DynamicModule, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Module({})
export class RedisModule implements OnModuleDestroy {
  onModuleDestroy() {
    if (RedisModule.redisClient) RedisModule.redisClient.quit();
  }

  private static redisClient: Redis;

  static forRootAsync(): DynamicModule {
    const redisProvider = {
      provide: 'REDIS_CONNECTION',
      useFactory: async () => {
        try {
          const client = new Redis({
            host: process.env.REDIS_HOST || 'redis',
            port: Number(process.env.REDIS_PORT) || 6379,
          });

          await client.ping();

          RedisModule.redisClient = client;

          return client;
        } catch (err) {
          console.error('Redis connection error:', err);
          throw new Error('Could not connect to Redis');
        }
      },
    };

    return {
      module: RedisModule,
      providers: [redisProvider],
      exports: [redisProvider],
    };
  }
}
