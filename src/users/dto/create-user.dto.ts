import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty({ description: 'Número de telefone', required: false })
  numero?: string;
  @ApiProperty({ description: 'Endereço', required: false })
  endereco?: string;
  @ApiProperty({ description: 'Complemento do endereço', required: false })
  complemento?: string;
  @ApiProperty()
  cpf: string;
}
