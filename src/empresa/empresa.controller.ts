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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('empresa')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação da empresa',
  })
  create(@Body() dto: CreateEmpresaDto) {
    return this.empresaService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem das empresas',
  })
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listar uma empresa',
  })
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar uma empresa',
  })
  update(@Param('id') id: string, @Body() dto: UpdateEmpresaDto) {
    return this.empresaService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar uma empresa',
  })
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }
}
