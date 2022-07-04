import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  create(dto: CreateEmpresaDto) {
    return 'This action adds a new empresa';
  }

  findAll() {
    return `This action returns all empresa`;
  }

  findOne(id: string) {
    return `This action returns a #${id} empresa`;
  }

  update(id: string, dto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: string) {
    return `This action removes a #${id} empresa`;
  }
}
