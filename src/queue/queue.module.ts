import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { QueueController } from './queue.controller';

@Module({
  imports: [],
  controllers: [QueueController],
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}

// Redis connection n ta chegando certo, vou entar rever esse tanto de RedisModule e refazer essa bagaca, problema que n vi nada sobre multiplas filas com nomes dinamicos.
