import { Module, Global } from '@nestjs/common';
import { redisProvider } from './redis.provider';

@Global()
@Module({
  providers: [redisProvider],
  exports: ['REDIS_CONNECTION'],
})
export class RedisModule {}
