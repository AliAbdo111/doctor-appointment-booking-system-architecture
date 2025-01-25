// src/doctor-availability/services/slot.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SlotRepository } from '../repositories/slot.repository';
import { CreateSlotDto } from '../dtos/create-slot.dto';

@Injectable()
export class SlotService {
  constructor(
    @InjectRepository(SlotRepository)
    private readonly slotRepository: SlotRepository,
  ) {}

  async createSlot(createSlotDto: CreateSlotDto): Promise<Slot> {
    const slot = this.slotRepository.create(createSlotDto);
    return this.slotRepository.save(slot);
  }

  async getSlots(): Promise<Slot[]> {
    return this.slotRepository.find({ where: { isReserved: false } });
  }
}
