import { Controller, Get, Post, Body } from '@nestjs/common';
import { SlotService } from '../services/slot.service';
import { CreateSlotDto } from '../dtos/create-slot.dto';

@Controller('slots')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  async createSlot(@Body() createSlotDto: CreateSlotDto) {
    return this.slotService.createSlot(createSlotDto);
  }

  @Get()
  async getSlots() {
    return this.slotService.getSlots();
  }
}
