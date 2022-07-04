import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() dto: CreateEmpresaDto) {
    return this.empresaService.create(dto);
  }

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEmpresaDto) {
    return this.empresaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }
}
