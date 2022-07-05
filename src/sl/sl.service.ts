import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateSlDto } from './dto/create-sl.dto';
import { UpdateSlDto } from './dto/update-sl.dto';
import { Sl } from './entities/sl.entity';

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
}
