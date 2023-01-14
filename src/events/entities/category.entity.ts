import { ObjectType, Field, ID, GraphQLTimestamp } from '@nestjs/graphql';
import { Column, DataType, IsUUID, Model, Table } from 'sequelize-typescript';

@Table({ modelName: 'categories' })
@ObjectType()
export class Category extends Model<Category> {
  @Field(() => ID)
  @IsUUID(4)
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(80), allowNull: false })
  name: string;

  @Field(() => String)
  @Column({ type: DataType.STRING, allowNull: false })
  slug: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(150), allowNull: false })
  description: string;

  // @Field(() => String)
  // @Column({ type: DataType.STRING, allowNull: true })
  // image: string;

  @Field(() => String)
  @Column({ type: DataType.STRING(), allowNull: true })
  color: string;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  created_at: Date;

  @Field(() => GraphQLTimestamp)
  @Column({ type: DataType.DATE, allowNull: false })
  updated_at: Date;
}
