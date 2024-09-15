import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { configDotenv } from 'dotenv';
configDotenv();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL)],
  exports: [
    MongooseModule, // Make MongooseModule available to other modules
  ],
})
export class DatabaseModule {}
