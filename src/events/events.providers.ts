import { Category } from './entities/category.entity';
import {
  EVENT_REPOSITORY,
  CATEGORIES_REPOSITORY,
  EVENT_HAS_CATEGORIES_REPOSITORY,
} from './../core/constants/repositories';
import { Event, EventHasCategories } from './entities';

export const eventsProviders = [
  {
    provide: EVENT_REPOSITORY,
    useValue: Event,
  },
  {
    provide: CATEGORIES_REPOSITORY,
    useValue: Category,
  },
  {
    provide: EVENT_HAS_CATEGORIES_REPOSITORY,
    useValue: EventHasCategories,
  },
];
