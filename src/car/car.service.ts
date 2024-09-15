import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateOptions } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { CreateLocationDTO } from './dto/create-location.dto';
import { Car } from './entities/car.entity';
import { Location } from './entities/location.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private readonly Car: PaginateModel<Car>,
    @InjectModel(Location.name)
    private readonly Location: PaginateModel<Location>,
  ) {}

  async getCars(options: PaginateOptions = { limit: 10, page: 1 }) {
    const cars = await this.Car.paginate({}, options);
    return cars;
  }
  async createCar(car: CreateCarDto) {
    const newLocation = await this.createLocation(car.location);
    const newCar = await this.Car.create({ ...car, location: newLocation._id });
    return await newCar.populate(`location`);
  }
  async createLocation(location: CreateLocationDTO) {
    const newLocation = await this.Location.create(location);
    return newLocation;
  }
}
