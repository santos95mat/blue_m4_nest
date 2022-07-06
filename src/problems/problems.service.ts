import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { Problem } from './entities/problem.entity';

@Injectable()
export class ProblemsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProblemDto) {
    return await this.prisma.problems
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async findAll() {
    return await this.prisma.problems.findMany();
  }

  async findOne(id: string) {
    const problem: Problem = await this.prisma.problems.findUnique({
      where: { id },
    });

    if (!problem) {
      throw new NotFoundException(`Entrada de id ${id} não encontrada`);
    }
    return problem;
  }

  async update(id: string, dto: UpdateProblemDto) {
    this.findOne(id);

    return await this.prisma.problems
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    this.findOne(id);

    return await this.prisma.problems.delete({ where: { id } });
  }
}
