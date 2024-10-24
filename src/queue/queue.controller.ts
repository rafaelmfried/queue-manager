import {
  Controller,
  // Get,
  Post,
  // Body,
  // Patch,
  Param,
  // Delete,
} from '@nestjs/common';
import { QueueService } from './queue.service';
// import { UpdateQueueDto } from './dto/update-queue.dto';
// import { InsertJobDto } from './dto/insert-job.dto';
// import { UpdateJobDto } from './dto/update-job.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post(':attendantId')
  async create(@Param('attendantId') attendantId: string): Promise<string> {
    return await this.queueService.create(attendantId);
  }

  // @Get()
  // findAll() {
  //   return this.queueService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.queueService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQueueDto: UpdateQueueDto) {
  //   return this.queueService.update(id, updateQueueDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.queueService.remove(id);
  // }

  // // Jobs

  // @Post()
  // insertJob(@Body() insertJobDto: InsertJobDto) {
  //   return this.queueService.insertJob(insertJobDto);
  // }

  // @Patch()
  // updateJobPriority(@Body() updateJobDto: UpdateJobDto) {
  //   return this.queueService.updateJobPriority(updateJobDto);
  // }

  // @Get(':id')
  // getJob(@Param('id') id: string) {
  //   return this.queueService.getJob(id);
  // }

  // @Delete('id')
  // finalizeJob(@Param('id') id: string) {
  //   return this.queueService.finalizeJob(id);
  // }

  // @Delete(':id')
  // deleteJob(@Param('id') id: string) {
  //   return this.queueService.removeJob(id);
  // }
}
