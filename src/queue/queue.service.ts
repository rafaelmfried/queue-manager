import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { InsertJobDto } from './dto/insert-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class QueueService {
  async create(createQueueDto: CreateQueueDto) {
    console.log(createQueueDto);
    return 'This action adds a new queue';
  }

  async findAll() {
    return `This action returns all queue`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} queue`;
  }

  async update(id: string, updateQueueDto: UpdateQueueDto) {
    console.log(updateQueueDto);
    return `This action updates a #${id} queue`;
  }

  async remove(id: string) {
    return `This action removes a #${id} queue`;
  }
  // Job

  async insertJob(insertJobDto: InsertJobDto) {
    console.log(insertJobDto);
    return 'This action inserts a new job';
  }

  async updateJobPriority(updateJobDto: UpdateJobDto) {
    console.log(updateJobDto);
    return 'This action updates a job priority';
  }

  async getJob(id: string) {
    return `This action returns a #${id} job`;
  }

  async finalizeJob(id: string) {
    return `This action finalizes a #${id} job`;
  }

  async removeJob(id: string) {
    return `This action deletes a #${id} job`;
  }
}
