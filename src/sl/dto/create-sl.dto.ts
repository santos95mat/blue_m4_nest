import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateSlDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Código do poste',
    example: 'P01',
  })
  codigo: string;

  @IsString()
  @Length(8)
  @ApiProperty({
    description: 'CEP de localização do poste',
    example: '31530480',
  })
  cep: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da rua que esta o poste',
    example: 'Rua David jardim, 50',
  })
  street: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do Bairro que esta o poste',
    example: 'Santa Mônica',
  })
  district: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da cidade que esta o poste',
    example: 'Belo Horizonte',
  })
  city: string;
}
