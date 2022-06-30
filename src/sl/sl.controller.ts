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

@ApiTags('sl')
@Controller('sl')
export class SlController {
  constructor(private readonly slService: SlService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de poste',
  })
  create(@Body() dto: CreateSlDto) {
    return this.slService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem dos postes',
  })
  findAll() {
    return this.slService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listagem de um poste',
  })
  findOne(@Param('id') id: string) {
    return this.slService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de um poste',
  })
  update(@Param('id') id: string, @Body() dto: UpdateSlDto) {
    return this.slService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclusão de um poste',
  })
  remove(@Param('id') id: string) {
    return this.slService.remove(id);
  }
}
