import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from './queue/queue.module';
import { Redis } from 'ioredis';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: () => {
        const connection = new Redis({
          host: 'redis',
          port: 6379,
        });
        return {
          connection,
        };
      },
    }),
    QueueModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
