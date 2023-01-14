import { InputType, Field, GraphQLTimestamp } from '@nestjs/graphql';
import {
  IsArray,
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateEventInput {
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  slug?: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  address: string;

  @IsDate()
  @IsNotEmpty()
  @Field(() => GraphQLTimestamp)
  sell_limit_date: Date;

  @IsDate()
  @IsNotEmpty()
  @Field(() => GraphQLTimestamp)
  start_date: Date;

  @IsDate()
  @IsNotEmpty()
  @Field(() => GraphQLTimestamp)
  end_date: Date;

  @IsString()
  @IsNumberString()
  @Field(() => String)
  latitude: string;

  @IsString()
  @IsNumberString()
  @Field(() => String)
  longitude: string;

  @IsArray()
  @Field(() => [String])
  categories: string[];
}
