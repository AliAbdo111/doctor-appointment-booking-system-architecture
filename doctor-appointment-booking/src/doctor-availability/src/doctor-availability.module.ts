import { Module } from '@nestjs/common';
import { SlotService } from './services/slot.service';
import { SlotController } from './controllers/slot.controller';

@Module({
  imports: [],
  controllers: [SlotController],
  exports: [SlotService],
  providers: [SlotService],
})
export class DoctorAvailabilityModule {}
