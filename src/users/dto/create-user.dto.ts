import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Matheus',
    description: 'Nome do usuário',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    example: 'matheus@blue.com',
    description: 'Email do usuário',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    example: 'Teste@22',
    description:
      'minimo 8 caracteres c/ letras maiuscula, minusculas, caracter especial e numero',
  })
  password: string;
}
