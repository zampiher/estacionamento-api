import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  plate: string;
  @ApiProperty()
  brand: string;
  @ApiProperty()
  color: string;
  @ApiProperty()
  model: string;
  @ApiProperty()
  year: number;
}
