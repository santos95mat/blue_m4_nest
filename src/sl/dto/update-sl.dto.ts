import { PartialType } from '@nestjs/swagger';
import { CreateSlDto } from './create-sl.dto';

export class UpdateSlDto extends PartialType(CreateSlDto) {}
