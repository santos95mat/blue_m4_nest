import { Module } from '@nestjs/common';
import { OsService } from './os.service';
import { OsController } from './os.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OsController],
  providers: [OsService],
})
export class OsModule {}
