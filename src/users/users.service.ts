import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/users.entities';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User | void> {
    const hashedPassword: string = bcrypt.hashSync(dto.password, 8);
    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };
    return await this.prisma.user
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }

    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | void> {
    await this.findOne(id);

    return await this.prisma.user
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
