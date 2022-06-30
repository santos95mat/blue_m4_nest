import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SlModule } from './sl/sl.module';

@Module({
  imports: [UsersModule, SlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
