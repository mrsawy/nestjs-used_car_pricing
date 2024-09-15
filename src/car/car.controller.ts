import { Controller, Post, Get, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post(`/`)
  async createCar(@Body() body: CreateCarDto) {
    const newCar = await this.carService.createCar(body);
    return newCar;
  }
}
