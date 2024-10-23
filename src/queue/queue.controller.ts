import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { InsertJobDto } from './dto/insert-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post()
  async create(@Body() createQueueDto: CreateQueueDto) {
    return await this.queueService.create(createQueueDto);
  }

  @Get()
  async findAll() {
    return await this.queueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.queueService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQueueDto: UpdateQueueDto,
  ) {
    return await this.queueService.update(id, updateQueueDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.queueService.remove(id);
  }

  // Jobs

  @Post()
  async insertJob(@Body() insertJobDto: InsertJobDto) {
    return await this.queueService.insertJob(insertJobDto);
  }

  @Patch()
  async updateJobPriority(@Body() updateJobDto: UpdateJobDto) {
    return await this.queueService.updateJobPriority(updateJobDto);
  }

  @Get(':id')
  async getJob(@Param('id') id: string) {
    return await this.queueService.getJob(id);
  }

  @Delete('id')
  async finalizeJob(@Param('id') id: string) {
    return await this.queueService.finalizeJob(id);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    return await this.queueService.removeJob(id);
  }
}
