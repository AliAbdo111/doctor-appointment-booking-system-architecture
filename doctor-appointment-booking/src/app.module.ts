import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorAvailabilityModule } from './doctor-availability/src/doctor-availability.module';

@Module({
  imports: [DoctorAvailabilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
