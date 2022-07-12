import { Module } from '@nestjs/common';
import { SlService } from './sl.service';
import { SlController } from './sl.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [SlController],
  providers: [SlService, JwtStrategy],
})
export class SlModule {}
