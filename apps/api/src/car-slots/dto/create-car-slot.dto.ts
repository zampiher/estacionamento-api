import { ApiProperty } from '@nestjs/swagger';

export class CreateCarSlotDto {
  @ApiProperty()
  price: number;
}
