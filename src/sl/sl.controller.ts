import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SlService } from './sl.service';
import { CreateSlDto } from './dto/create-sl.dto';
import { UpdateSlDto } from './dto/update-sl.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Sl } from './entities/sl.entity';

@ApiTags('sl')
@Controller('sl')
export class SlController {
  constructor(private readonly slService: SlService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de poste',
  })
  async create(@Body() dto: CreateSlDto): Promise<Sl | void> {
    return await this.slService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem dos postes',
  })
  async findAll(): Promise<Sl[]> {
    return await this.slService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listagem de um poste',
  })
  async findOne(@Param('id') id: string): Promise<Sl> {
    return await this.slService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de um poste',
  })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateSlDto,
  ): Promise<Sl | void> {
    return await this.slService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclusão de um poste',
  })
  remove(@Param('id') id: string) {
    return this.slService.remove(id);
  }
}