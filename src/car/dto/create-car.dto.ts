import { Type } from 'class-transformer';
import {
  IsString,
  IsEnum,
  IsNumber,
  IsNotEmpty,
  IsMongoId,
  ValidateNested,
} from 'class-validator';
import { CarBrand } from '../enums/carBrand.enum';
import { CreateLocationDTO } from './create-location.dto';

export class CreateCarDto {
  @IsString()
  @IsEnum(CarBrand)
  brand: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  year: number;

  @ValidateNested()
  @Type(() => CreateLocationDTO)
  @IsNotEmpty()
  location: CreateLocationDTO;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
