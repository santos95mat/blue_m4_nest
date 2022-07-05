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
import { Empresa } from './entities/empresa.entity';

@ApiTags('empresa')
@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação da empresa',
  })
  async create(@Body() dto: CreateEmpresaDto): Promise<Empresa> {
    return await this.empresaService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem das empresas',
  })
  async findAll(): Promise<Empresa[]> {
    return await this.empresaService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listar uma empresa',
  })
  async findOne(@Param('id') id: string): Promise<Empresa> {
    return await this.empresaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar uma empresa',
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateEmpresaDto,
  ): Promise<Empresa> {
    return await this.empresaService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar uma empresa',
  })
  async remove(@Param('id') id: string) {
    return await this.empresaService.remove(id);
  }
}
