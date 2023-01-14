import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Event, Category, EventHasCategories } from 'src/events/entities';

// ENTITIES

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      models: [EventHasCategories, Category, Event],
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      define: {
        createdAt: false,
        updatedAt: false,
      },
      // autoLoadModels: true,
      // synchronize: true,
      // sync: {
      //   alter: true,
      // },
    }),
  ],
  exports: [SequelizeModule],
})
export default class DatabaseModule {}
