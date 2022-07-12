import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/users.entities';

export class loginRespondeDto {
  @ApiProperty({
    description: 'token gerado no login',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário que realizou o login',
  })
  user: User;
}
