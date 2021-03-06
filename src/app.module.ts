import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SlModule } from './sl/sl.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ProblemsModule } from './problems/problems.module';
import { OsModule } from './os/os.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, SlModule, EmpresaModule, ProblemsModule, OsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
