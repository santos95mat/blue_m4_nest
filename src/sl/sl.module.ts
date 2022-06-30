import { Module } from '@nestjs/common';
import { SlService } from './sl.service';
import { SlController } from './sl.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SlController],
  providers: [SlService],
})
export class SlModule {}
