import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que esta favoritando o poste',
    example: 'd81bed17-ea68-42fe-a4bb-8d87d69c8fa3',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'codigo do poste',
    example: 'poste1',
  })
  slname: string;
}
