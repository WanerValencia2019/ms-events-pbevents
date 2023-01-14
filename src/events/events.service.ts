import { EVENT_REPOSITORY } from './../core/constants/repositories';
import { Inject, Injectable } from '@nestjs/common';

import { CreateEventInput } from './dto/inputs/create-event.input';
import { UpdateEventInput } from './dto/inputs/update-event.input';

import { Event } from './entities';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EVENT_REPOSITORY)
    private readonly eventRepository: typeof Event,
  ) {}

  async create(createEventInput: CreateEventInput) {
    const event = await this.eventRepository.create(createEventInput);
    return event;
  }

  async findAll() {
    return this.eventRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
