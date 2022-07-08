import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/users.entities';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateSlDto } from './dto/create-sl.dto';
import { FavoriteProductDto } from '../favorite/dto/favorite-sl-dto';
import { UpdateSlDto } from './dto/update-sl.dto';
import { Favorite } from '../favorite/entities/favorite.entity';
import { Sl } from './entities/sl.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class SlService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSlDto): Promise<Sl | void> {
    return await this.prisma.sL
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async findAll(): Promise<Sl[]> {
    return await this.prisma.sL.findMany();
  }

  async findOne(id: string): Promise<Sl> {
    const sl = await this.prisma.sL.findUnique({ where: { id } });

    if (!sl) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }

    return sl;
  }

  async update(id: string, dto: UpdateSlDto): Promise<Sl | void> {
    await this.findOne(id);

    return await this.prisma.sL
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.prisma.sL.delete({ where: { id } });
  }

  async favorite(dto: FavoriteProductDto): Promise<Favorite> {
    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    const sl: Sl = await this.prisma.sL.findUnique({
      where: { name: dto.slname },
    });

    if (!user) {
      throw new NotFoundException(`Entrada de id ${dto.userId} não encontrada`);
    }

    if (!sl) {
      throw new NotFoundException(
        `Entrada do nome ${dto.slname} não encontrado`,
      );
    }

    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      slid: {
        connect: {
          name: dto.slname,
        },
      },
    };

    return await this.prisma.favorite
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  async unfavorite(id: string) {
    const favorite: Favorite = await this.prisma.favorite.findUnique({
      where: { id: id },
    });

    if (!favorite) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }

    return await this.prisma.favorite.delete({ where: { id } });
  }
}
