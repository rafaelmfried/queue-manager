import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueModule } from './queue/queue.module';
import { RedisModule } from './redis/redis.module';
import { BullModule } from '@nestjs/bullmq';
import Redis from 'ioredis';

@Module({
  imports: [
    RedisModule,
    BullModule.forRootAsync({
      imports: [RedisModule],
      inject: ['REDIS_CONNECTION'],
      useFactory: (redisConnection: Redis) => ({
        connection: redisConnection,
      }),
    }),
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
