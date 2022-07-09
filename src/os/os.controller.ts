import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OsService } from './os.service';
import { CreateOsDto } from './dto/create-os.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('os')
@Controller('os')
export class OsController {
  constructor(private readonly osService: OsService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de Os',
  })
  async create(@Body() dto: CreateOsDto) {
    return await this.osService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listando todas as Os',
  })
  async findAll() {
    return await this.osService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listando uma Os por Id',
  })
  async findOne(@Param('id') id: string) {
    return await this.osService.findOne(id);
  }
}
