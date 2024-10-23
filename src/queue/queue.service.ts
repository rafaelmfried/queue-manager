import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { InsertJobDto } from './dto/insert-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class QueueService {
  create(createQueueDto: CreateQueueDto) {
    console.log(createQueueDto);
    return 'This action adds a new queue';
  }

  findAll() {
    return `This action returns all queue`;
  }

  findOne(id: string) {
    return `This action returns a #${id} queue`;
  }

  update(id: string, updateQueueDto: UpdateQueueDto) {
    console.log(updateQueueDto);
    return `This action updates a #${id} queue`;
  }

  remove(id: string) {
    return `This action removes a #${id} queue`;
  }
  // Job

  insertJob(insertJobDto: InsertJobDto) {
    console.log(insertJobDto);
    return 'This action inserts a new job';
  }

  updateJobPriority(updateJobDto: UpdateJobDto) {
    console.log(updateJobDto);
    return 'This action updates a job priority';
  }

  getJob(id: string) {
    return `This action returns a #${id} job`;
  }

  finalizeJob(id: string) {
    return `This action finalizes a #${id} job`;
  }

  removeJob(id: string) {
    return `This action deletes a #${id} job`;
  }
}
