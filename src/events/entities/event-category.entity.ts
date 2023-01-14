import { ObjectType, Field, ID, GraphQLTimestamp } from '@nestjs/graphql';
import { Column, DataType, IsUUID, Table, Model } from 'sequelize-typescript';

@Table({ modelName: 'event-has-categories' })
@ObjectType('eventHasCategories')
export class EventHasCategories extends Model<EventHasCategories> {
  @Field(() => ID)
  @IsUUID(4)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Field(() => ID)
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  event_id: string;

  @Field(() => ID)
  @IsUUID(4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  category_id: string;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  created_at: Date;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  updated_at: Date;
}
