import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from './queue/queue.module';
// import { JobModule } from './job/job.module';
// import { ProcessingModule } from './processing/processing.module';

@Module({
  imports: [
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 5379,
      },
    }),
    QueueModule,
    // JobModule,
    // ProcessingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
