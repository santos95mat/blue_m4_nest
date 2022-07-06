import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'nome do problema',
    example: 'Led',
  })
  name: string;
}
