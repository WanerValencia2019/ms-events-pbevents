import { Module } from '@nestjs/common';
import { EventsResolver } from './events.resolver';
import { eventsProviders } from './events.providers';

import { EventsService } from './events.service';
import DatabaseModule from 'src/core/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EventsResolver, EventsService, ...eventsProviders],
})
export class EventsModule {}
