import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'nome da empresa',
    example: 'Cemig',
  })
  name: string;
}
