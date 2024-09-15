import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as paginatePlugin from 'mongoose-paginate-v2';
import { CarBrand } from '../enums/carBrand.enum';
import { Location } from './location.entity';

@Schema()
export class Car {
  @Prop({ required: true, type: String, enum: CarBrand })
  brand!: CarBrand;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, type: Number })
  price: number;
  @Prop({ required: true })
  year: number;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Location.name,
  })
  location: Location;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  imageUrl: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);

CarSchema.plugin(paginatePlugin);
