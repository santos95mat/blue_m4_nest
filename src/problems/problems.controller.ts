import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('problems')
@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Post()
  @ApiOperation({
    summary: 'criar um problema',
  })
  create(@Body() dto: CreateProblemDto) {
    return this.problemsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'listar todos os problemas',
  })
  findAll() {
    return this.problemsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listar um problema',
  })
  findOne(@Param('id') id: string) {
    return this.problemsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'atualizar um problema',
  })
  update(@Param('id') id: string, @Body() dto: UpdateProblemDto) {
    return this.problemsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'deletar um problema',
  })
  remove(@Param('id') id: string) {
    return this.problemsService.remove(id);
  }
}
