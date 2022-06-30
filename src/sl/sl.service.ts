import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSlDto } from './dto/create-sl.dto';
import { UpdateSlDto } from './dto/update-sl.dto';

@Injectable()
export class SlService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateSlDto) {
    return this.prisma.sL.create({ data: dto });
  }

  findAll() {
    return this.prisma.sL.findMany();
  }

  findOne(id: string) {
    return this.prisma.sL.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateSlDto) {
    return this.prisma.sL.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.sL.delete({ where: { id } });
  }
}
