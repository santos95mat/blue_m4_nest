import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SlModule } from './sl/sl.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [UsersModule, SlModule, EmpresaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
