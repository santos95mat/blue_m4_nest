import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'nome do problema',
    example: 'Led',
  })
  problemName: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário',
    example: '63d3d4cf-be70-4b86-830e-e14305dd328c',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista de postes com defeito',
    example: `['63d3d4cf-be70-4b86-830e-e14305dd328c'],[63d3d4cf-be70-4b86-830e-e14305dd328c]`,
  })
  sl: string[];
}
