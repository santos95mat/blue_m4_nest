import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateOsDto } from './dto/create-os.dto';

@Injectable()
export class OsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOsDto) {
    const data: Prisma.OsCreateInput = {
      problem: {
        connect: {
          name: dto.problemName,
        },
      },
      user: {
        connect: {
          id: dto.userId,
        },
      },
      sl: {
        connect: dto.sl.map((e) => ({ id: e })),
      },
    };

    return await this.prisma.os
      .create({
        data,
        select: {
          id: true,
          problemName: true,
          user: true,
          sl: true,
        },
      })
      .catch(handleErrorConstraintUnique);
  }

  async findAll() {
    return await this.prisma.os.findMany({
      select: { id: true, problemName: true, user: true, sl: true },
    });
  }

  async findOne(id: string) {
    const os = await this.prisma.os.findUnique({
      where: { id },
      select: {
        id: true,
        problemName: true,
        user: true,
        sl: true,
      },
    });

    if (!os) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }

    return os;
  }
}
