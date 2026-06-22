import { ApiProperty } from '@nestjs/swagger';

export class AssociateCarDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  carId: number;
}
