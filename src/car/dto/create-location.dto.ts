import { IsString } from 'class-validator';

export class CreateLocationDTO {
  @IsString()
  city: string;

  @IsString()
  country: string;
}
