import { EventHasCategories } from './event-category.entity';
import { Category } from './category.entity';
import { ObjectType, Field, ID, GraphQLTimestamp, Int } from '@nestjs/graphql';
import {
  BelongsToMany,
  Column,
  DataType,
  IsUUID,
  Table,
  Model,
} from 'sequelize-typescript';

@Table({ modelName: 'events' })
@ObjectType()
export class Event extends Model<Event> {
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
  created_by: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(150), allowNull: false })
  title: string;

  @Field(() => String)
  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(300), allowNull: false })
  slug: string;

  @Field(() => Int)
  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  space_available: number;

  @Field(() => String)
  @Column({ type: DataType.STRING(150), allowNull: false })
  address: string;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  sell_limit_date: Date;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  start_date: Date;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  end_date: Date;

  @Field(() => String)
  @Column({ type: DataType.STRING(100), allowNull: false })
  latitude: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(100), allowNull: false })
  longitude: string;

  @Field(() => GraphQLTimestamp)
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  created_at: Date;

  @Field(() => GraphQLTimestamp)
  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updated_at: string;

  @Field(() => [Category])
  @BelongsToMany(
    () => Category,
    () => EventHasCategories,
    'event_id',
    'category_id',
  )
  categories: Category[];

  // image = models.OneToOneField(Image, verbose_name="Imagen principal", max_length=5000, null=True,

  //                              on_delete=models.SET_NULL,
  //                              related_name="image_events")
  // other_images = models.ManyToManyField(Image, verbose_name="Otras imagenes",
  //                                       related_name="other_images_event", blank=True)
}
