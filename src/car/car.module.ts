import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Car, CarSchema } from './entities/car.entity';
import { Location, LocationSchema } from './entities/location.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Car.name, schema: CarSchema },
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
