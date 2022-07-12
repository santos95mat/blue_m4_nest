import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Favorite } from 'src/favorite/entities/favorite.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entities';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de usuário',
  })
  async create(@Body() dto: CreateUserDto): Promise<User | void> {
    return await this.usersService.create(dto);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Listagem dos usuários',
  })
  @ApiBearerAuth()
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Listagem de um usuário',
  })
  @ApiBearerAuth()
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Atualização de um usuário',
  })
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User | void> {
    return await this.usersService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Exclusão de um usuário',
  })
  @ApiBearerAuth()
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }

  @Get(':id/favorites')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Postes favoritos do usuário',
  })
  @ApiBearerAuth()
  async findAllFav(@Param('id') id: string): Promise<Favorite[]> {
    return await this.usersService.findAllFav(id);
  }
}
