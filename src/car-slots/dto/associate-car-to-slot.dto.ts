import { ApiProperty } from '@nestjs/swagger';

export class AssociateCarToSlotDto {
  @ApiProperty()
  carId: number;
}
