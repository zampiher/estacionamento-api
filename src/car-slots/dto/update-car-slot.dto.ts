import { PartialType } from '@nestjs/swagger';
import { CreateCarSlotDto } from './create-car-slot.dto';

export class UpdateCarSlotDto extends PartialType(CreateCarSlotDto) {}
