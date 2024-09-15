import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as paginatePlugin from 'mongoose-paginate-v2';

@Schema()
export class Location {
  @Prop({ required: true })
  city: string;
  @Prop({ required: true })
  country: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
LocationSchema.plugin(paginatePlugin);
