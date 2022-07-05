import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateEmpresaDto): Promise<Empresa> {
    return await this.prisma.empresa
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async findAll(): Promise<Empresa[]> {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: string): Promise<Empresa> {
    const empresa: Empresa = await this.prisma.empresa.findUnique({
      where: { id },
    });

    if (!empresa) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }

    return empresa;
  }

  async update(id: string, dto: UpdateEmpresaDto): Promise<Empresa> {
    await this.findOne(id);

    return await this.prisma.empresa
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.prisma.empresa.delete({ where: { id } });
  }
}
