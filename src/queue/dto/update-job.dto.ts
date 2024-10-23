import { PartialType } from '@nestjs/mapped-types';
import { InsertJobDto } from './insert-job.dto';

export class UpdateJobDto extends PartialType(InsertJobDto) {}
