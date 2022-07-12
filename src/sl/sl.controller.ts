import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SlService } from './sl.service';
import { CreateSlDto } from './dto/create-sl.dto';
import { UpdateSlDto } from './dto/update-sl.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Sl } from './entities/sl.entity';
import { FavoriteProductDto } from '../favorite/dto/favorite-sl-dto';
import { Favorite } from 'src/favorite/entities/favorite.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('sl')
@ApiBearerAuth()
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
  async remove(@Param('id') id: string) {
    return await this.slService.remove(id);
  }

  @Post('favorite')
  @ApiOperation({
    summary: 'Favoritando um poste',
  })
  async favorite(@Body() dto: FavoriteProductDto): Promise<Favorite> {
    return await this.slService.favorite(dto);
  }

  @Delete('favorite/:id')
  @ApiOperation({
    summary: 'Desfavoritar um poste',
  })
  async unfavorite(@Param('id') id: string) {
    return await this.slService.unfavorite(id);
  }
}
