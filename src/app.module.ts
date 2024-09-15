import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ReportModule } from './report/report.module';
import { CarModule } from './car/car.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, AuthModule, ReportModule, CarModule, DatabaseModule],
})
export class AppModule {}
